const { Kafka } = require('kafkajs')
const mqtt = require('mqtt')
const mqttClient  = mqtt.connect('ssl://mqtt.hsl.fi:8883', {clientId: 'MQTT-Java-Example'})
const topic = '/hfp/v2/journey/ongoing/vp/#';
mqttClient.on('connect', function () {
    mqttClient.subscribe(topic)
})
const main = async () => {
    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['kafka:9092']
    })
    const producer = kafka.producer()
    await producer.connect()
    mqttClient.on('message', async (topic, message) => {
        console.log(`message received from topic ${topic}`);
        await producer.send({
            topic: 'vehicle-positions',
            messages: [
                { key: topic, value: message.toString() },
            ],
        })
    })
}
void main();
