import express, { Express } from "express";
import {
  webhookGet,
  webhookPost,
  sendResponseMessage,
} from "../controllers/main.controller";

module.exports = function (app: Express) {
  const router = express.Router();

  // verification request
  router.get("/webhook", webhookGet);

  // receives webhook notifications from meta messenger platform
  router.post("/webhook", webhookPost);

  // send a response a message in response to the client's request
  router.post("/send-message/:user_id", sendResponseMessage);

  app.use("/api", router);
};
