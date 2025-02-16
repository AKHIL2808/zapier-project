"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const middleware_1 = __importDefault(require("../middleware"));
const types_1 = require("../types");
const db_1 = require("../db");
const argon2 = __importStar(require("argon2"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const router = (0, express_1.Router)();
// const jwt_secret = process.env.JWT || ""
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    const parseData = types_1.signUpSchema.safeParse(body);
    if (!parseData.success) {
        res.json({
            message: "please send the correct inputs"
        });
    }
    if (parseData.success) {
        console.log("inside success");
        const userExist = yield db_1.prismaclient.user.findFirst({
            where: { email: parseData.data.email }
        });
        if (userExist) {
            res.json({
                message: "user already exist"
            });
        }
        const hashedPassword = yield argon2.hash(parseData.data.password);
        yield db_1.prismaclient.user.create({
            data: {
                name: parseData.data.name,
                email: parseData.data.email,
                password: hashedPassword
            }
        });
        res.json({
            message: "user created successfully"
        });
    }
}));
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    const parseData = types_1.signInSchema.safeParse(body);
    if (!parseData.success) {
        res.json({
            message: "please enter the data in the right format"
        });
    }
    if (parseData.success) {
        console.log("in success");
        const user = yield db_1.prismaclient.user.findFirst({
            where: { email: parseData.data.email }
        });
        console.log(user);
        if (!user) {
            res.json({
                message: "user doesn't exist"
            });
        }
        try {
            const verifyPassword = yield argon2.verify((user === null || user === void 0 ? void 0 : user.password) || "", parseData.data.password);
            if (!verifyPassword) {
                res.json({
                    message: "invalid credentials"
                });
            }
            console.log(process.env.JWT);
            console.log("jwt is ", config_1.JWT_SECRET);
            const token = jsonwebtoken_1.default.sign({
                id: user === null || user === void 0 ? void 0 : user.id
            }, config_1.JWT_SECRET);
            res.json({
                token: token
            });
        }
        catch (err) {
            console.log(err);
            res.json({
                message: "error"
            });
        }
    }
}));
router.get("/", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const id = req.id;
    const user = yield db_1.prismaclient.user.findFirst({
        where: {
            id
        }, select: {
            email: true,
            name: true
        }
    });
    res.json({
        data: { user }
    });
}));
exports.userRouter = router;
