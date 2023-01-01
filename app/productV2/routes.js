import express from "express";
import * as controlerV2 from "./controler.js";
import multer from "multer";

const upload = multer({ dest: "public" });
const routerV2 = express.Router();

routerV2.get("/product", controlerV2.productV2);
routerV2.get("/product/:id", controlerV2.detail2);
routerV2.delete("/product/:id", controlerV2.destroy);
routerV2.post("/product/", upload.single("image_url"), controlerV2.store);
// routerV2.post("/product", controlerV2.store);
// routerV2.put("/product/:id", upload.single("image_url"), controlerV2.update);
routerV2.put("/product/:id", controlerV2.update);

export default routerV2;
