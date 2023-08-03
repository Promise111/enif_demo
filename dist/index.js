"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const PORT = process.env.PORT || 8000;
const errorHandler = require("./app/middleware/error-handler.middleware");
const app = (0, express_1.default)();
app.use(express_1.default.static(node_path_1.default.join(__dirname, "..", "public")));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// app.use("/api", (req: Request, res: Response) => {
//   res.send("hello");
// });
require("./app/routes/main.routes")(app);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
