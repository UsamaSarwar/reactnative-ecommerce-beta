import express from "express";
import {
  addProduct,
  deleteProduct,
  viewProduct,
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

router.get("/view", viewProduct);

router.post("/add", upload.single("image"), addProduct);

router.post("/delete", deleteProduct);

router.post("/update", updateProduct);

export default router;
