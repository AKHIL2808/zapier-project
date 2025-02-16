import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config";

console.log(process.env.JWT)

export default function authMiddleWare(req: Request, res: Response, next: NextFunction) {

  const token = req.headers.authorization as string
  console.log(token)
  try {
    const payload = jwt.verify(token, JWT_SECRET)
    console.log(payload)
    //@ts-ignore
    req.id = payload.id
    next()
  } catch (err) {
    console.log(err)
    res.json({
      message: "cannot log in"
    })
  }
}
