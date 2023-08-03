"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_controller_1 = require("../controllers/main.controller");
module.exports = function (app) {
    const router = express_1.default.Router();
    // verification request
    router.get("/webhook", main_controller_1.webhookGet);
    // receives webhook notifications from meta messenger platform
    router.post("/webhook", main_controller_1.webhookPost);
    // send a response a message in response to the client's request
    router.post("/send-message/:user_id", main_controller_1.sendResponseMessage);
    app.use("/api", router);
};
