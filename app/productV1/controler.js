import db from "../../config/mongodb.js";
import path from "path";
import fs from "fs";
import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

const __dirname = path.resolve();
export const productV1 = (req, res) => {
  db.collection("products")
    .find()
    .toArray()
    .then((result) => res.send(result))
    .catch((e) => res.send(e));
};
export const view = (req, res) => {
  const { id } = req.params;
  db.collection("products")
    .find({ _id: ObjectId(id) })
    .toArray()
    .then((result) => res.send(result))
    .catch((e) => res.send(e));
};
export const destroy = (req, res) => {
  const { id } = req.params;
  db.collection("products")
    .deleteOne({ _id: ObjectId(id) })
    .then((result) => res.send(result))
    .catch((e) => res.send(e));
};

export const store = (req, res) => {
  const { name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "public", image.originalname);
    fs.renameSync(image.path, target);
    db.collection("products")
      .insertOne({ name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` })
      .then((result) => res.send(result))
      .catch((e) => res.send(e));
  }
};

export const update = (req, res) => {
  const id = req.params;
  const { name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "public", image.originalname);
    fs.renameSync(image.path, target);
    db.collection("products")
      .updateOne({ _id: ObjectId(id) }, { $set: { name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` } })
      .then((result) => res.send(result))
      .catch((e) => res.send(e));
  }
};
