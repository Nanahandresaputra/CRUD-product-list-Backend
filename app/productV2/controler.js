import Product from "./model.js";
import { ObjectID } from "bson";
// import path from "path";
// import fs from "fs";

// const __dirname = path.resolve();
export const productV2 = (req, res) => {
  Product.find()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

export const detail2 = (req, res) => {
  const id = req.params;
  Product.findOne({ _id: ObjectID(id) })
    .then((result) => res.send(result))
    .catch((e) => res.send(e));
};

export const destroy = (req, res) => {
  const id = req.params;
  Product.deleteOne({ _id: ObjectID(id) })
    .then((result) => res.send(result))
    .catch((e) => res.send(e));
};

export const store = (req, res) => {
  const { name, price, stock, status } = req.body;
  // const image = req.file;
  // if (image) {
  //   const target = path.join(__dirname, "public", image.originalname);
  //   fs.renameSync(image.path, target);
  //   Product.create({ name, price, stock, status, image_url: `http://localhost:8000/public/${image.originalname}` })
  //     .then((result) => res.send(result))
  //     .catch((e) => res.send(e));
  // }
  Product.create({ name, price, stock, status })
    .then((result) => res.send(result))
    .catch((e) => res.send(e));
};

export const update = (req, res) => {
  const id = req.params;
  const { name, price, stock, status } = req.body;
  // const image = req.file;
  // if (image) {
  //   const target = path.join(__dirname, "public", image.originalname);
  //   fs.renameSync(image.path, target);
  //   Product.updateOne({ _id: ObjectID(id) }, { name, price, stock, status, image_url: `http://localhost:8000/public/${image.originalname}` })
  //     .then((result) => res.send(result))
  //     .catch((e) => res.send(e));
  // }
  Product.updateOne({ _id: ObjectID(id) }, { name, price, stock, status })
    .then((result) => res.send(result))
    .catch((e) => res.send(e));
};
