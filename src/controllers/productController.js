const { createProduct, listProducts } = require("../services/product");

const productCreate = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    product && res.status(201).json("product created");
  } catch (e) {
    console.log(e);
  }
};

const productList = async (req, res) => {
  try {
    const products = await listProducts();
    // console.log(products);
    products && res.status(200).json(products);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { productCreate, productList };
