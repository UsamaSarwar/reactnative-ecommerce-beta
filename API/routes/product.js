import express from "express";
import {
  addProduct,
  deleteProduct,
  viewProductSingle,
  viewProductList,
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
    cb(null, Date.now().setHours(0, 0, 0, 0) + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

router.post("/view", viewProductSingle);

router.post("/view/list", viewProductList);

router.post("/add", upload.single("image"), addProduct);

router.post("/delete", deleteProduct);

router.post("/update", updateProduct);

export default router;
