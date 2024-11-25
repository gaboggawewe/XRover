import sys
import os
import paho.mqtt.client as mqtt
import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from src.database.databaseManager import DatabaseManager

# Load environment variables from .env file
load_dotenv()

# Database connection parameters
db_host = os.getenv('DB_HOST')
db_name = os.getenv('DB_NAME')
db_user = os.getenv('DB_USER')
db_password = os.getenv('DB_PASSWORD')

# Function to insert data into the database
def insert_data(cursor, query, values):
    try:
        cursor.execute(query, values)
        cursor._connection.commit()
    except Error as e:
        print(f"Error: {e}")

# MQTT callback when the client connects to the broker
def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected successfully")
        client.subscribe("nagani/#")  # Subscribe to all topics under 'nagani'
    else:
        print(f"Connection failed with result code {rc}")

# MQTT callback when a message is received
def on_message(client, userdata, msg):
    print(f"Received message: {msg.topic} -> {msg.payload.decode()}")
    connection = userdata['db_connection']
    cursor = connection.cursor()

    # Handle messages for different topics
    if msg.topic == "nagani/distance":
        query = "INSERT INTO distance_sensor_data (distance) VALUES (%s)"
        values = (float(msg.payload.decode().split()[1]),)
        insert_data(cursor, query, values)

    elif msg.topic == "nagani/pressure":
        data = msg.payload.decode().split(", ")
        temperature = float(data[0].split()[1])
        pressure = float(data[1].split()[1])
        altitude = float(data[2].split()[1])
        query = "INSERT INTO pressure_sensor_data (temperature, pressure, altitude) VALUES (%s, %s, %s)"
        values = (temperature, pressure, altitude)
        insert_data(cursor, query, values)

    elif msg.topic == "nagani/adc":
        data = msg.payload.decode().split(", ")
        analogico = float(data[0].split()[1])
        volts = float(data[1].split("=")[1])
        query = "INSERT INTO adc_data (analog, volts) VALUES (%s, %s)"
        values = (analogico, volts)
        insert_data(cursor, query, values)

    elif msg.topic == "nagani/accelerometer":
        data = msg.payload.decode().split(", ")
        acceleration_x = float(data[0].split(": ")[1])
        acceleration_y = float(data[1].split(": ")[1])
        acceleration_z = float(data[2].split(": ")[1])
        freefall = data[3].split(": ")[1]
        tap = data[4].split(": ")[1]
        motion = data[5].split(": ")[1]
        query = "INSERT INTO accelerometer_data (acceleration_x, acceleration_y, acceleration_z, freefall, tap, motion) VALUES (%s, %s, %s, %s, %s, %s)"
        values = (acceleration_x, acceleration_y, acceleration_z, freefall, tap, motion)
        insert_data(cursor, query, values)

# Main script
db_manager = DatabaseManager(db_host, db_name, db_user, db_password)
db_connection = db_manager.get_connection()
if db_connection is None:
    print("Failed to connect to the database")
    exit(1)

# Initialize MQTT client and set callbacks
client = mqtt.Client()
client.user_data_set({'db_connection': db_connection})
client.on_connect = on_connect
client.on_message = on_message

# Connect to the MQTT broker and start the loop
client.connect("broker.hivemq.com", 1883, 60)
client.loop_forever()