import { Router } from "express";
import authMiddleWare from "../middleware";
import { signInSchema, signUpSchema } from "../types";
import { prismaclient } from "../db";
import * as argon2 from "argon2"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config";


const router = Router()
// const jwt_secret = process.env.JWT || ""


router.post("/signup", async (req, res) => {
  const body = req.body
  console.log(body)
  const parseData = signUpSchema.safeParse(body)
  if (!parseData.success) {
    res.json({
      message: "please send the correct inputs"
    })
  }
  if (parseData.success) {
    console.log("inside success")
    const userExist = await prismaclient.user.findFirst({
      where: { email: parseData.data.email }
    })
    if (userExist) {
      res.json({
        message: "user already exist"
      })
    }
    const hashedPassword = await argon2.hash(parseData.data.password)
    await prismaclient.user.create({
      data: {
        name: parseData.data.name,
        email: parseData.data.email,
        password: hashedPassword
      }
    })
    res.json({
      message: "user created successfully"
    })
  }
})


router.post("/signin", async (req, res) => {
  const body = req.body
  console.log(body)
  const parseData = signInSchema.safeParse(body)
  if (!parseData.success) {
    res.json({
      message: "please enter the data in the right format"
    })
  }
  if (parseData.success) {
    console.log("in success")
    const user = await prismaclient.user.findFirst({
      where: { email: parseData.data.email }
    })
    console.log(user)
    if (!user) {
      res.json({
        message: "user doesn't exist"
      })
    }
    try {
      const verifyPassword = await argon2.verify(user?.password || "", parseData.data.password)
      if (!verifyPassword) {
        res.json({
          message: "invalid credentials"
        })
      }
      console.log(process.env.JWT)
      console.log("jwt is ", JWT_SECRET)
      const token = jwt.sign({
        id: user?.id
      }, JWT_SECRET)

      res.json({
        token: token
      })

    } catch (err) {
      console.log(err)
      res.json({
        message: "error"
      })
    }
  }
})


router.get("/", authMiddleWare, async (req, res) => {
  //@ts-ignore
  const id = req.id
  const user = await prismaclient.user.findFirst({
    where: {
      id
    }, select: {
      email: true,
      name: true
    }
  })
  res.json({
    data: { user }
  })
})


export const userRouter = router
