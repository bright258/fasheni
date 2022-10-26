const {
  productCreate,
  productList,
  getSingleProduct,
  productDeletion,
  productUpdate,
} = require("../controllers/productController");
const express = require("express");
const router = express();

router.post("/product/create", productCreate);
router.get("/products", productList);
router.get("/product", getSingleProduct);
router.delete("/product/delete", productDeletion);
router.put("/product/update", productUpdate);

module.exports = { router };
