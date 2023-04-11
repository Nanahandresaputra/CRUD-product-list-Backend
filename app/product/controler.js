// import { ObjectID } from "bson";
const Product = require("./model.js");

const index = async (req, res, next) => {
  try {
    const product = await Product.find();
    return res.json(product);
  } catch (err) {
    next(err);
  }
};

const detail2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.json(product);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    return res.json(`${product.name} deleted successfully`);
  } catch (err) {
    next(err);
  }
};

const store = async (req, res, next) => {
  try {
    const payload = req.body;
    const product = new Product(payload);
    await product.save();
    return res.json(product);
  } catch (err) {
    if (err && err.name === "ValidationError") {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    let payload = req.body;
    let product = await Product.findByIdAndUpdate(id, payload);
    return res.json(`${product.name} updated successfully`);
  } catch (err) {}
};

module.exports = { index, detail2, update, store, destroy };
