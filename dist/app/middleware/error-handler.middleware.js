"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const APIError = require("../utilities/Error");
function errorHandler(error, req, res, next) {
    if (error instanceof APIError) {
        return res.status(error === null || error === void 0 ? void 0 : error.statusCode).json({
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
}
exports.errorHandler = errorHandler;
