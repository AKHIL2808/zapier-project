"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zapCreateSchema = exports.signInSchema = exports.signUpSchema = void 0;
const zod_1 = require("zod");
exports.signUpSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email({ message: "invalid email" }),
    password: zod_1.z.string().min(5, { message: "Type minimum of 5 characters" })
});
exports.signInSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "invalid email" }),
    password: zod_1.z.string().min(5, { message: "Type minimum of 5 characters" })
});
exports.zapCreateSchema = zod_1.z.object({
    availableTriggerId: zod_1.z.string(),
    metaData: zod_1.z.any().optional(),
    actions: zod_1.z.array(zod_1.z.object({
        availableActionId: zod_1.z.string(),
        metaAction: zod_1.z.any().optional()
    }))
});
