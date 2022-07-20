import mongoose from "mongoose";
const { Schema } = mongoose;

const user = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: false },
});

export default mongoose.model("User", user);
