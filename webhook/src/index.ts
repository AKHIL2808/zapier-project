import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express()
const client = new PrismaClient()


app.use(express.json())

app.post("/hook/catch/:userId/:zapId", async (req, res) => {
  const userId = req.params.userId
  const zapId = req.params.zapId
  const body = req.body
  await client.$transaction(async (tx) => {
    const run = await tx.zaprun.create({
      data: {
        zapId,
        metadata: body
      }
    })
    await tx.zaprunOutbox.create({
      data: {
        zaprunId: run.id
      }
    })
  })
  res.json({
    "message": "webhook working"
  })
})


app.listen(3000)
