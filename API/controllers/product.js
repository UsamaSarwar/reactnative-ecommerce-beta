import product from "../model/product.js";

export const addProduct = async (req, res) => {
  try {
    if (
      req.body.name.trim() &&
      req.body.category.trim() &&
      req.body.price &&
      req.body.discount &&
      req.body.stock
    ) {
      let name = req.body.name;
      let cat = req.body.category;
      let brand = req.body.brand;
      let image = "";
      if (req.file) {
        image = req.file.originalname;
      }
      let des = req.body.description;

      if (des) {
        des = des.trim();
      }
      if (brand) {
        brand = brand.trim();
      }
      if (image) {
        image = image.trim();
      }
      await product.create({
        name: name,
        category: cat,
        price: req.body.price,
        discount: req.body.discount,
        stock: req.body.stock,
        description: des ? des : "",
        brand: brand ? brand : "",
        image: image ? image : "",
        color: req.body.color ? req.body.color : "",
        size: req.body.size ? req.body.size : "",
      });

      res.status(200).json({
        heaeder: { message: "New Product added" },
        body: {},
      });
    } else {
      throw new Error("missing values");
    }
  } catch (err) {
    res.status(500).json({
      header: { message: err.message },
      body: {},
    });
  }
};

export const deleteProduct = async (req, res) => {
  console.log("I am mad ");
};

export const updateProduct = async (req, res) => {};

export const getProduct = async (req, res) => {};
