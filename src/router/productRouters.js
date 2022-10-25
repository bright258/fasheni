const {
  productCreate,
  productList,
} = require("../controllers/productController");
const express = require("express");
const router = express();

router.post("/product/create", productCreate);
router.get("/products", productList);

module.exports = { router };
