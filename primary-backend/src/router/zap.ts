
import { Router } from "express";
import authMiddleWare from "../middleware";

const router = Router()

router.get("/", authMiddleWare, (req, res) => {
  res.json({
    "message": "this is the zap get page"
  })
})


router.post("/", authMiddleWare, (req, res) => {
  res.json({
    "message": "this is the zap create page"
  })
})


router.post("/:zapId", authMiddleWare, (req, res) => {
  res.json({
    "message": "this is the get route of the specific zap  page"
  })
})


export const zapRouter = router
