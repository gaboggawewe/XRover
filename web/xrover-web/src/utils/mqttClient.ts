import mqtt from 'mqtt';

const client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt');

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

export function sendMqttMessage(topic: string, message: string) {
  client.publish(topic, message, (err) => {
    if (err) {
      console.error('Failed to publish message:', err);
    } else {
      console.log(`Message published to ${topic}: ${message}`);
    }
  });
}