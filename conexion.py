import time
import board
import busio
import adafruit_adxl34x
import RPi.GPIO as GPIO
import adafruit_bmp280
import adafruit_ads1x15.ads1115 as ADS
from adafruit_ads1x15.analog_in import AnalogIn
import paho.mqtt.client as mqtt

def read_accelerometer():
    i2c = busio.I2C(board.SCL, board.SDA)
    accel = adafruit_adxl34x.ADXL345(i2c)
    accel.enable_freefall_detection(threshold=10, time=25)
    accel.enable_motion_detection(threshold=18)
    accel.enable_tap_detection(tap_count=1, threshold=20, duration=50, latency=20, window=255)

    acceleration_x, acceleration_y, acceleration_z = accel.acceleration
    freefall = accel.events["freefall"]
    tap = accel.events['tap']
    motion = accel.events['motion']
    return acceleration_x, acceleration_y, acceleration_z, freefall, tap, motion

def read_distance_sensor():
    GPIO.setmode(GPIO.BCM)
    TRIG = 23
    ECHO = 24

    GPIO.setup(TRIG, GPIO.OUT)
    GPIO.setup(ECHO, GPIO.IN)

    GPIO.output(TRIG, False)
    time.sleep(2)

    GPIO.output(TRIG, True)
    time.sleep(0.00001)
    GPIO.output(TRIG, False)

    while GPIO.input(ECHO) == 0:
        pulse_start = time.time()

    while GPIO.input(ECHO) == 1:
        pulse_end = time.time()

    pulse_duration = pulse_end - pulse_start
    distance = pulse_duration * 17150
    distance = round(distance, 2)

    GPIO.cleanup()
    return distance


def read_pressure_sensor():
    i2c = board.I2C()
    bmp280 = adafruit_bmp280.Adafruit_BMP280_I2C(i2c, address=0x76)
    bmp280.sea_level_pressure = 1013.25
    temperature = bmp280.temperature
    pressure = bmp280.pressure
    altitude = bmp280.altitude
    return temperature, pressure, altitude


def read_analog_sensor():
    i2c = busio.I2C(board.SCL, board.SDA)
    ads = ADS.ADS1115(i2c)
    channel = AnalogIn(ads, ADS.P0)
    analogico = channel.value
    volts = channel.voltage
    return analogico, volts

def on_publish(client, userdata, mid, reason_code, properties):
   
    try:
        userdata.remove(mid)
    except KeyError:
        print("Error")
 

unacked_publish = set()
mqttc = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
mqttc.on_publish = on_publish

mqttc.user_data_set(unacked_publish)
mqttc.connect("broker.hivemq.com", 1883)

mqttc.loop_start()

# Publicar en topic 1
msg_info = mqttc.publish("testTECIoT/2", "\nTemperatura: %0.1f C" % temperature, qos=2)
unacked_publish.add(msg_info.mid)

# Publicar en topic 2
msg_info2 = mqttc.publish("testpalo/2", "profe", qos=2)
unacked_publish.add(msg_info2.mid)

# Esperando a publicar el mensaje
while len(unacked_publish):
    time.sleep(0.1)

msg_info.wait_for_publish()
msg_info2.wait_for_publish()

mqttc.disconnect()
mqttc.loop_stop()