require("dotenv").config();
import express, { Request, Response, Express } from "express";
import path from "node:path";
const PORT = process.env.PORT || 8000;
const errorHandler = require("./app/middleware/error-handler.middleware");

const app: Express = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/api", (req: Request, res: Response) => {
//   res.send("hello");
// });
require("./app/routes/main.routes")(app);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
