import express, { Express } from "express";

module.exports = function (app: Express) {
  const router = express.Router();
  const {
    webhookGet,webhookPost,
    sendMessage,
  } = require("../controllers/main.controller");

  router.get("/webhook", webhookGet)
  router.post("/webhook", webhookPost);
  router.post("/send-message", sendMessage);

  app.use("/api", router);
};
