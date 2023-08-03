import { Request, Response, NextFunction } from "express";

exports.webhookGet = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const VERIFY_TOKEN = "your_verify_token"; // Replace with your VERIFY_TOKEN
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];
  try {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("Webhook verified!");
      return res.status(200).send(challenge);
    } else {
      console.error("Failed to verify webhook!");
      return res.sendStatus(403);
    }
  } catch (error) {
    next(error);
  }
};

exports.webhookPost = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body: any = req.body;
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
  } catch (error) {
    next(error);
  }
};

exports.sendMessage = async function name(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.status(200).json({
      status: "success",
      message: "message sent successfully",
      data: "message",
    });
  } catch (error) {
    next(error);
  }
};
