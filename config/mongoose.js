import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose
  // untuk konek ke local
  .connect("mongodb://latihan:latihan@127.0.0.1:27017/latihan?authSource=admin")
  // untuk konek ke clouds mongo atlas
  // .connect("mongodb+srv://latihan:latihan@<cluster-url>?retryWrites=true&w=majority")
  .then(() => console.log("mongoose connected"))
  .catch((e) => console.log(e));
