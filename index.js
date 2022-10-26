const express = require("express");
const app = express();
const pgp = require("pg-promise")();

const { database, userTableCreator } = require("./src/config/databaseConfig");
require("dotenv").config();

const port = process.env.PORT;

const { createProduct } = require("./src/services/product");
const { productTableCreator } = require("./src/config/databaseConfig");
const { router } = require("./src/router/productRouters");
const { user } = require("./src/router/userRouters");
const { signIn } = require("./src/utils/signIn");

const dataConnect = database
  .connect()
  .then((data) => {
    console.log(`database up `);
  })
  .catch((err) => {
    console.log(err);
  });

// create tables
productTableCreator();
userTableCreator();
// signIn();

app.listen(port, (req, res) => {
  console.log(`server is up on port ${port}`);
});

app.use(express.json());
app.use("/api/v1", router);
app.use("/api/v1/user", user);
