import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

import userRoute from "./routes/user.js";

const app = express();
const port = process.env.PORT || 8000;

dotenv.config();
app.use("/user", userRoute);

mongoose.connect(process.env.URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
