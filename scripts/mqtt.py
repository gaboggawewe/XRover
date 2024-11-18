import time
import paho.mqtt.client as mqtt

from src.sensors.distance_sensor import read_distance_sensor
from src.sensors.pressure_sensor import read_pressure_sensor
from src.sensors.analog_sensor import read_analog_sensor 
from src.sensors.accelerometer import read_accelerometer

# Callback function for when a message is published
def on_publish(client, userdata, mid, reason_code, properties):
    try:
        userdata.remove(mid)
    except KeyError:
        print("Error")

# Set to keep track of unacknowledged messages
unacked_publish = set()
mqttc = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
mqttc.on_publish = on_publish

mqttc.user_data_set(unacked_publish)
mqttc.connect("broker.hivemq.com", 1883)

mqttc.loop_start()

# Main loop to read sensor data and publish to MQTT broker
while True:
    distanceSensor = read_distance_sensor()
    pressureSensor = read_pressure_sensor()
    analogSensor = read_analog_sensor()
    accelerometerSensor = read_accelerometer()

    msg_info_dist = mqttc.publish("nagani/distance", f"Distance: {distanceSensor:.2f} cm", qos=2)
    unacked_publish.add(msg_info_dist.mid)

    msg_info_press = mqttc.publish("nagani/pressure", f"Temperature: {pressureSensor[0]:.1f} C, Pressure: {pressureSensor[1]:.1f} hPa, Altitude: {pressureSensor[2]:.1f} m", qos=2)
    unacked_publish.add(msg_info_press.mid)

    msg_info_adc = mqttc.publish("nagani/adc", f"Analogico: {analogSensor[0]:.1f}, Volts={analogSensor[1]:.1f}", qos=2)
    unacked_publish.add(msg_info_adc.mid)

    msg_info_accel = mqttc.publish("nagani/accelerometer", f"Acceleration_x: {accelerometerSensor[0]:.2f}, Acceleration_y: {accelerometerSensor[1]:.2f}, Acceleration_z: {accelerometerSensor[2]:.2f}, Freefall: {accelerometerSensor[3]}, Tap: {accelerometerSensor[4]}, Motion: {accelerometerSensor[5]}", qos=2)
    unacked_publish.add(msg_info_accel.mid)

    while len(unacked_publish):
        time.sleep(0.1)

    msg_info_press.wait_for_publish()
    msg_info_dist.wait_for_publish()
    msg_info_accel.wait_for_publish()

    time.sleep(1)

mqttc.disconnect()
mqttc.loop_stop()