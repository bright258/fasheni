const {
  createProduct,
  listProducts,
  getProduct,
  deleteProduct,
  updatedProduct,
} = require("../services/product");

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
    const page = req.query.page;
    const limit = 5;
    const offset = limit * page - limit;
    console.log(offset);
    const products = await listProducts(limit, offset);
    // console.log(products);
    products && res.status(200).json(products);
  } catch (e) {
    console.log(e);
  }
};

const getSingleProduct = async (req, res) => {
  //   const id = req.params.id;
  //   console.log();
  const id = req.query.id;
  console.log(id);
  try {
    // console.log(req);
    const product = await getProduct(id);
    if (!product) {
      res.status(500).json("product not found");
    }
    product && res.status(200).json(product);
  } catch (e) {
    console.log(e);
  }
};

const productDeletion = async (req, res) => {
  const id = req.query.id;

  try {
    const product = await deleteProduct(id);
    product && res.status(200).json("product deleted");
  } catch (e) {
    return e;
  }
};

const productUpdate = async (req, res) => {
  const body = req.body;
  const id = req.query.id;
  // console.log(body);
  try {
    const product = await updatedProduct(id, body);
    product && res.status(200).json("product updated");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  productCreate,
  productList,
  getSingleProduct,
  productDeletion,
  productUpdate,
};
