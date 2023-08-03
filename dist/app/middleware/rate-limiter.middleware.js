"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.limiter = void 0;
const rateLimit = require("express-rate-limiter");
exports.limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});
