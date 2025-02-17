"use strict";
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
exports.zapRouter = void 0;
const express_1 = require("express");
const middleware_1 = __importDefault(require("../middleware"));
const types_1 = require("../types");
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.get("/", middleware_1.default, (req, res) => {
    res.json({
        "message": "this is the zap get page"
    });
});
router.post("/", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.id;
    const body = req.body;
    console.log("this is the body", body);
    const paredData = types_1.zapCreateSchema.safeParse(body);
    if (!paredData.success) {
        res.json({
            message: "please enter the valid inputs"
        });
    }
    try {
        if (paredData.success) {
            console.log(paredData.data.actions);
            const zap = yield db_1.prismaclient.zap.create({
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
            });
            res.json({
                message: zap
            });
        }
    }
    catch (err) {
        res.json({
            message: "error while inserting"
        });
        console.log(err);
    }
}));
router.post("/:zapId", middleware_1.default, (req, res) => {
    res.json({
        "message": "this is the get route of the specific zap  page"
    });
});
exports.zapRouter = router;
