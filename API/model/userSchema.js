import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  phoneNo: { type: String, required: true },
  dob: { type: Date, required: true },
  Address: { type: String, required: false },
});

export default userSchema;
