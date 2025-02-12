import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";

const client = new PrismaClient()
const kafka = new Kafka({
  clientId: "outsource-processor",
  brokers: ['localhost:9092']
})
async function main() {
  const producer = kafka.producer()
  await producer.connect()
  while (true) {
    const rowsToBeInserted = await client.zaprunOutbox.findMany({
      take: 10
    })
    await producer.send({
      topic: "zap-events",
      messages: rowsToBeInserted.map((x) => {
        return {
          value: JSON.stringify({ zapRunId: x.zaprunId })
        }
      })
    })
    await client.zaprunOutbox.deleteMany({
      where: {
        id: {
          in: rowsToBeInserted.map((x) => x.id)
        }
      }
    })
  }
}

main()
