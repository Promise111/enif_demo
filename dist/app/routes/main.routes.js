"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
module.exports = function (app) {
    const router = express_1.default.Router();
    const { webhookGet, webhookPost, sendMessage, } = require("../controllers/main.controller");
    router.get("/webhook", webhookGet);
    router.post("/webhook", webhookPost);
    router.post("/send-message", sendMessage);
    app.use("/api", router);
};
