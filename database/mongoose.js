const mongoose = require("mongoose");
const config = require("../config/config.js");
mongoose.set("strictQuery", true);

mongoose.connect(config.mongoUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("database connection"));

module.exports = db;
