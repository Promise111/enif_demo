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
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookGet = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const VERIFY_TOKEN = "your_verify_token"; // Replace with your VERIFY_TOKEN
        const mode = req.query["hub.mode"];
        const token = req.query["hub.verify_token"];
        const challenge = req.query["hub.challenge"];
        try {
            if (mode === "subscribe" && token === VERIFY_TOKEN) {
                console.log("Webhook verified!");
                return res.status(200).send(challenge);
            }
            else {
                console.error("Failed to verify webhook!");
                return res.sendStatus(403);
            }
        }
        catch (error) {
            next(error);
        }
    });
};
exports.webhookPost = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        console.log(`\u{1F7EA} Received webhook:`);
        console.dir(body, { depth: null });
        // if (body.object != "page") {
        //   return res.sendStatus(404);
        // }
        if (req.body.object === "instagram" && req.body.entry) {
            const entry = req.body.entry[0];
            const message = entry.messaging[0];
            // Process the message (e.g., send a response)
            // Replace this with your custom message handling logic
            console.log("Received message:", message);
        }
        res.status(200).send("EVENT RECEIVED");
        try {
        }
        catch (error) {
            next(error);
        }
    });
};
exports.sendMessage = function name(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.status(200).json({
                status: "success",
                message: "message sent successfully",
                data: "message",
            });
        }
        catch (error) {
            next(error);
        }
    });
};
