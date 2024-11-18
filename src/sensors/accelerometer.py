import time
import board
import busio
import adafruit_adxl34x

# Function to read data from the accelerometer
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
