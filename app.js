import express from "express";
import logger from "morgan";
import routerV1 from "./app/productV1/routes.js";
import path from "path";
import cors from "cors";
import routerV2 from "./app/productV2/routes.js";
import "./config/mongoose.js";
const __dirname = path.resolve();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// mongodb
app.get("/", (req, res) => {
  res.send("<h1>Ini homepage</h1>");
});
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/api/v1", routerV1);
// mongoose
app.use("/api/v2", routerV2);
app.use((req, res) => {
  res.status(404);
  res.send({
    status: "error",
    message: `resource ${req.originalUrl} not found`,
  });
});
app.listen(8000, console.log("server running in http://localhost:8000"));
