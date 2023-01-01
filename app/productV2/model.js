import mongoose from "mongoose";

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
  image_url: {
    type: String,
  },
});
// jika menggunakan collection atau data yang sudah ada maka gunakan seperi yg dibawah jika membuat baru pakai yang di folder backend yg bukan tugas
const Product = mongoose.model("Product", productSchema, "product");

export default Product;
