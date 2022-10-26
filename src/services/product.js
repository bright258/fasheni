// crud
const { database } = require("../config/databaseConfig");

const createProduct = async (body) => {
  // console.log("hello", body.description);
  try {
    const input = await database.query(
      "INSERT INTO productss(name, price, description) VALUES(${name}, ${price}, ${description})",
      {
        name: body.name,
        price: body.price,
        description: body.description,
      }
    );

    return input;
  } catch (e) {
    return { e };
  }
};

const listProducts = async () => {
  try {
    const output = await database.manyOrNone(
      "SELECT * FROM productss ORDER BY name DESC"
    );
    // .then((result) => {
    //   return result;
    // });

    return output;
  } catch (e) {
    return { e };
  }
};

const getProduct = async (id) => {
  try {
    const product = await database.any(
      "SELECT * FROM productss WHERE id = ${id}",
      {
        id: id,
      }
    );

    return { product };
  } catch (e) {
    return { e };
  }
};

const deleteProduct = async (id) => {
  try {
    const product = await database.any(
      "DELETE FROM productss WHERE id = ${id}",
      {
        id: id,
      }
    );
    return product;
  } catch (e) {
    return e;
  }
};

const updatedProduct = async (id, body) => {
  console.log(body);
  try {
    const product = await database.any(
      `
    UPDATE productss 
    SET  name= $(name), price = $(price), description = $(description) WHERE id = $(id) `,
      {
        name: body.name,
        price: body.price,
        description: body.description,
        id: id,
      }
    );
    return product;
  } catch (e) {
    return e;
  }
};
//
module.exports = {
  createProduct,
  listProducts,
  getProduct,
  deleteProduct,
  updatedProduct,
};
