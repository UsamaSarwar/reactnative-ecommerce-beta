import mongoose from "mongoose";
const { Schema } = mongoose;

const product = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  stock: { type: Number, required: true },
  brand: { type: String, required: false },
  image: { type: String, required: false },
  color: { type: [String], required: false },
  size: { type: [String], required: false },
});

export default mongoose.model("Product", product);
