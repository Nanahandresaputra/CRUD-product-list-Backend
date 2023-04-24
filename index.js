const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const productRouter = require("./app/product/routes.js");
const db = require("./database/mongoose.js");
const config = require("./config/config.js");

const port = config.port;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Product list</h1> <p>Crud product list api service</p>");
});
app.use("/api/", productRouter);
app.use((req, res) => {
  res.status(404);
  res.send({
    status: "error",
    message: `resource ${req.originalUrl} not found`,
  });
});
app.listen(port, console.log(`server running in port ${port}`));
