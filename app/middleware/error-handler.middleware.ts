import { Request, Response, NextFunction } from "express";
const APIError = require("../utilities/Error");

module.exports = function (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof APIError) {
    return res.status(error?.statusCode).json({
      status: "error",
      message: "Oops, an error occurred",
      data: error,
    });
  }
  res.status(500).json({
    status: "error",
    message: "Oops, internal server error",
    data: error,
  });
};
