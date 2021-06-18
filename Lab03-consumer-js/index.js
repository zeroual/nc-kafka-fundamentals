const { Kafka } = require('kafkajs')

const main = async () => {
    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['kafka:9092']
    })
    const consumer = kafka.consumer({ groupId: 'test-group-2' })

    await consumer.connect()
    await consumer.subscribe({ topic: 'vehicle-positions', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            })
        },
    })

}
void main();
