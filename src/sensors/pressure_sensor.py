import adafruit_bmp280
import board

# Function to read data from the pressure sensor
def read_pressure_sensor():
    i2c = board.I2C()
    bmp280 = adafruit_bmp280.Adafruit_BMP280_I2C(i2c, address=0x76)
    bmp280.sea_level_pressure = 1013.25
    temperature = bmp280.temperature
    pressure = bmp280.pressure
    altitude = bmp280.altitude
    return temperature, pressure, altitude
