import mysql.connector
from mysql.connector import Error


class DatabaseManager:
    def __init__(self, host, database, user, password):
        self.host = host
        self.database = database
        self.user = user
        self.password = password
        self.connection = None
        self.cursor = None
        self.connect()

    def connect(self):
        try:
            self.connection = mysql.connector.connect(
                host='localhost',  # Change to 'localhost'
                database='XRover',
                user='root',  # Change to 'root' or your desired user
                password='Chariot&SQL'  # Ensure this matches your user's password
            )
            if self.connection.is_connected():
                self.cursor = self.connection.cursor()
        except Error as e:
            print(e)

    def disconnect(self):
        if self.connection.is_connected():
            self.cursor.close()
            self.connection.close()

    def insert_value(self, value):
        query = """INSERT INTO ads1115 (analog_value, voltage) VALUES (%s,%s)"""
        values = (value, "10")
        self.cursor.execute(query, values)
        self.connection.commit()