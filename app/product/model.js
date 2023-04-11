const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "nama harus diisi"],
    minlenght: 3,
    maxlenght: 100,
  },
  price: {
    type: Number,
    required: [true, "price harus diisi"],
    min: 100,
    max: 100000000,
  },
  stock: {
    type: Number,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
