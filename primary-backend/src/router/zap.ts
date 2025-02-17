
import { Router } from "express";
import authMiddleWare from "../middleware";
import { zapCreateSchema } from "../types";
import { prismaclient } from "../db";

const router = Router()

router.get("/", authMiddleWare, (req, res) => {
  res.json({
    "message": "this is the zap get page"
  })
})


router.post("/", authMiddleWare, async (req, res) => {
  //@ts-ignore
  const userId = req.id
  const body = req.body
  console.log("this is the body", body)
  const paredData = zapCreateSchema.safeParse(body)
  if (!paredData.success) {
    res.json({
      message: "please enter the valid inputs"
    })
  }
  try {
    if (paredData.success) {
      console.log(paredData.data.actions)
      const zap = await prismaclient.zap.create({
        data: {
          userId,
          trigger: {
            create: {
              triggerType: paredData.data.availableTriggerId,
              metaData: paredData.data.metaData,
            }
          },
          actions: {
            create: paredData.data.actions.map((action, index) => ({
              actionType: action.availableActionId,
              // metadata: action.metaAction,
              metaData: action.metaAction,
              sortedOrder: index
            }))
          }
        },
        include: {
          trigger: true,
          actions: true
        }
      })
      res.json({
        message: zap
      })
    }
  } catch (err) {
    res.json({
      message: "error while inserting"
    })
    console.log(err)
  }
})


router.post("/:zapId", authMiddleWare, (req, res) => {
  res.json({
    "message": "this is the get route of the specific zap  page"
  })
})


export const zapRouter = router
