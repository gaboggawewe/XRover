import RPi.GPIO as GPIO
from time import sleep

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

# Function to rotate right
def rotate_right():
    print("Rotar a la derecha")
    GPIO.output(Motor1, GPIO.HIGH)
    GPIO.output(Motor2, GPIO.LOW)
    GPIO.output(Motor3, GPIO.HIGH)
    GPIO.output(Motor4, GPIO.LOW)
    GPIO.output(Motor5, GPIO.HIGH)
    GPIO.output(Motor6, GPIO.HIGH)

# Function to rotate left
def rotate_left():
    print("Rotar a la izquierda")
    GPIO.output(Motor1, GPIO.LOW)
    GPIO.output(Motor2, GPIO.HIGH)
    GPIO.output(Motor3, GPIO.HIGH)
    GPIO.output(Motor4, GPIO.HIGH)
    GPIO.output(Motor5, GPIO.LOW)
    GPIO.output(Motor6, GPIO.HIGH)

# Function to stop the motors
def stop():
    print("Detener")
    GPIO.output(Motor3, GPIO.LOW)
    GPIO.output(Motor6, GPIO.LOW)

# Main loop to read user input and control the motors
print("Presiona 'w' para avanzar, 's' para retroceder, 'a' para rotar a la izquierda, 'd' para rotar a la derecha, y 'q' para salir.")
try:
    while True:
        tecla = input()
        if tecla == 'w':
            move_forward()
        elif tecla == 's':
            move_backward()
        elif tecla == 'a':
            rotate_left()
            sleep(0.5)
            stop()
        elif tecla == 'd':
            rotate_right()
            sleep(0.5)
            stop()
        elif tecla == 'q':
            stop()
            print("Saliendo...")
            break
        sleep(0.1)  # Pequeña pausa para evitar un uso excesivo de la CPU
except KeyboardInterrupt:
    pass
finally:
    GPIO.cleanup()