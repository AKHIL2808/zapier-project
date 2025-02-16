"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authMiddleWare;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
console.log(process.env.JWT);
function authMiddleWare(req, res, next) {
    const token = req.headers.authorization;
    console.log(token);
    try {
        const payload = jsonwebtoken_1.default.verify(token, config_1.JWT_SECRET);
        console.log(payload);
        //@ts-ignore
        req.id = payload.id;
        next();
    }
    catch (err) {
        console.log(err);
        res.json({
            message: "cannot log in"
        });
    }
}
