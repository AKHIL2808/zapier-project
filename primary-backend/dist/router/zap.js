"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zapRouter = void 0;
const express_1 = require("express");
const middleware_1 = __importDefault(require("../middleware"));
const router = (0, express_1.Router)();
router.get("/", middleware_1.default, (req, res) => {
    res.json({
        "message": "this is the zap get page"
    });
});
router.post("/", middleware_1.default, (req, res) => {
    res.json({
        "message": "this is the zap create page"
    });
});
router.post("/:zapId", middleware_1.default, (req, res) => {
    res.json({
        "message": "this is the get route of the specific zap  page"
    });
});
exports.zapRouter = router;
