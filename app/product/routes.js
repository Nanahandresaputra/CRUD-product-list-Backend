const express = require("express");
const productController = require("./controler.js");
const routerV2 = express.Router();

routerV2.get("/product", productController.index);
routerV2.get("/product/:id", productController.detail2);
routerV2.delete("/product/:id", productController.destroy);
routerV2.post("/product/", productController.store);
routerV2.put("/product/:id", productController.update);

module.exports = routerV2;
