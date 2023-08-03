"use strict";
const rateLimit = require("express-rate-limiter");
module.exports = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});
