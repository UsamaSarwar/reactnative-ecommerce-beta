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
        image = Date.now() + req.file.originalname;
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
        color: req.body.color ? JSON.parse(req.body.color) : [""],
        size: req.body.size ? JSON.parse(req.body.size) : [""],
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

export const deleteProduct = async (req, res) => {};

export const updateProduct = async (req, res) => {};

export const viewProductSingle = async (req, res) => {
  try {
    if (req.body._id) {
      const result = await product.findById(req.body._id);
      if (result) {
        res.status(200).json({
          header: { message: "success" },
          body: {
            product: {
              name: result.name,
              category: result.category,
              description: result.description,
              price: result.price,
              discount: result.discount,
              stock: result.stock,
              brand: result.brand,
              image: result.image,
              color: result.color,
              size: result.size,
            },
          },
        });
      } else {
        throw new Error("Product not found");
      }
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

export const viewProductList = async (req, res) => {
  try {
    const query = req.body.prevID ? { _id: { $gt: req.body.prevID } } : {};
    const pagelimit = 20;

    const result = await product
      .find(query)
      .limit(pagelimit)
      .select({ _id: 1, name: 1, price: 1, image: 1 });
    if (result) {
      res.status(200).json({
        header: { message: "success" },
        body: { products: result },
      });
    }
  } catch (err) {
    res.status(500).json({
      header: { message: err.message },
    });
  }
};
