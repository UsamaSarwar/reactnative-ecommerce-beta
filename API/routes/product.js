import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/product.js";
import multer from "multer";

const router = express.Router();
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

router.get("/getproduct", getProduct);

router.post("/addProduct", upload.single("image"), addProduct);

router.post("/deleteProduct", deleteProduct);

router.post("/updateProduct", updateProduct);

export default router;
