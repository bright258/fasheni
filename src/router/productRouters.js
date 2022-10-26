const {
  productCreate,
  productList,
  getSingleProduct,
  productDeletion,
  productUpdate,
} = require("../controllers/productController");
const { verify } = require("../middleware/userVerification");

const express = require("express");
const router = express();

// product routes
router.post("/product/create", productCreate);
router.get("/products", verify, productList);
router.get("/product", verify, getSingleProduct);
router.delete("/product/delete", verify, productDeletion);
router.put("/product/update", verify, productUpdate);

module.exports = { router };
