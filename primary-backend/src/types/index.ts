import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "invalid email" }),
  password: z.string().min(5, { message: "Type minimum of 5 characters" })
})



export const signInSchema = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z.string().min(5, { message: "Type minimum of 5 characters" })
})


export const zapCreateSchema = z.object({
  availableTriggerId: z.string(),
  metaData: z.any().optional(),
  actions: z.array(z.object({
    availableActionId: z.string(),
    metaAction: z.any().optional()
  }))
})
