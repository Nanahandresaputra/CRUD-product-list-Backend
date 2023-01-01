import express from "express";
import * as productControler from "./controler.js";
import multer from "multer";
const upload = multer({ dest: "public" });
const routerV1 = express.Router();

// routerV1.get();

routerV1.get("/product", productControler.productV1);
routerV1.get("/product/:id", productControler.view);
routerV1.delete("/product/:id", productControler.destroy);
routerV1.post("/product", upload.single("image_url"), productControler.store);
routerV1.put("/product/:id", upload.single("image_url"), productControler.update);
export default routerV1;
