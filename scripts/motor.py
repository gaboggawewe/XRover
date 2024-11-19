import RPi.GPIO as GPIO
from time import sleep
import paho.mqtt.client as mqtt

# Set up GPIO mode
GPIO.setmode(GPIO.BOARD)

# Define GPIO pins for motors
Motor1 = 38  # Entrada
Motor2 = 36  # Entrada
Motor3 = 40  # Habilitar

Motor4 = 35  # Entrada
Motor5 = 37  # Entrada
Motor6 = 33  # Habilitar

# Set up GPIO pins as output
GPIO.setup(Motor1, GPIO.OUT)
GPIO.setup(Motor2, GPIO.OUT)
GPIO.setup(Motor3, GPIO.OUT)

GPIO.setup(Motor4, GPIO.OUT)
GPIO.setup(Motor5, GPIO.OUT)
GPIO.setup(Motor6, GPIO.OUT)

# Function to move forward
def move_forward():
    print("Adelante")
    GPIO.output(Motor1, GPIO.HIGH)
    GPIO.output(Motor2, GPIO.LOW)
    GPIO.output(Motor3, GPIO.HIGH)
    GPIO.output(Motor4, GPIO.HIGH)
    GPIO.output(Motor5, GPIO.LOW)
    GPIO.output(Motor6, GPIO.HIGH)

# Function to move backward
def move_backward():
    print("Atras")
    GPIO.output(Motor1, GPIO.LOW)
    GPIO.output(Motor2, GPIO.HIGH)
    GPIO.output(Motor3, GPIO.HIGH)
    GPIO.output(Motor4, GPIO.LOW)
    GPIO.output(Motor5, GPIO.HIGH)
    GPIO.output(Motor6, GPIO.HIGH)

# Function to turn left
def turn_left():
    print("Izquierda")
    GPIO.output(Motor1, GPIO.HIGH)
    GPIO.output(Motor2, GPIO.LOW)
    GPIO.output(Motor3, GPIO.HIGH)
    GPIO.output(Motor4, GPIO.LOW)
    GPIO.output(Motor5, GPIO.HIGH)
    GPIO.output(Motor6, GPIO.HIGH)

# Function to turn right
def turn_right():
    print("Derecha")
    GPIO.output(Motor1, GPIO.LOW)
    GPIO.output(Motor2, GPIO.HIGH)
    GPIO.output(Motor3, GPIO.HIGH)
    GPIO.output(Motor4, GPIO.HIGH)
    GPIO.output(Motor5, GPIO.LOW)
    GPIO.output(Motor6, GPIO.HIGH)

# Function to stop
def stop():
    print("Detener")
    GPIO.output(Motor3, GPIO.LOW)
    GPIO.output(Motor6, GPIO.LOW)

# MQTT callback function for when a message is received
def on_message(client, userdata, message):
    command = message.payload.decode()
    print(f"Received command: {command}")
    if command == "forward":
        move_forward()
    elif command == "backward":
        move_backward()
    elif command == "left":
        turn_left()
    elif command == "right":
        turn_right()
    elif command == "stop":
        stop()

# MQTT setup
broker_address = "broker.hivemq.com"
client = mqtt.Client("MotorController")
client.on_message = on_message

client.connect(broker_address)
client.subscribe("nagani/control")

client.loop_start()

# Keep the script running
try:
    while True:
        sleep(1)
except KeyboardInterrupt:
    pass
finally:
    GPIO.cleanup()
    client.loop_stop()
    client.disconnect()