// // crud
// const { database } = require("../config/databaseConfig");

// const createProduct = async (body) => {
//   console.log("hello", body.description);
//   try {
//     const input = await database.query(
//       "INSERT INTO prod(name, price, description) VALUES(${name}, ${price}, ${description})",
//       {
//         name: body.name,
//         price: body.price,
//         description: body.description,
//       }
//     );
//     return input;
//   } catch (e) {
//     return { e };
//   }
// };

// const listProducts = async () => {
//   try {
//     const output = await database
//       .manyOrNone("SELECT * FROM prod")
//       .then((result) => {
//         return result;
//       });

//     return output;
//   } catch (e) {
//     return { e };
//   }
// };

// module.exports = { createProduct, listProducts };
