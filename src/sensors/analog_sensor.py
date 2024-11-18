import adafruit_ads1x15.ads1115 as ADS
from adafruit_ads1x15.analog_in import AnalogIn
import busio
import board

# Function to read data from the analog sensor
def read_analog_sensor():
    i2c = busio.I2C(board.SCL, board.SDA)
    ads = ADS.ADS1115(i2c)
    channel = AnalogIn(ads, ADS.P0)
    analogico = channel.value
    volts = channel.voltage
    return analogico, volts
