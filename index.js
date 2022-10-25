const express = require("express");
const app = express();
const pgp = require("pg-promise")();

const { database } = require("./src/config/databaseConfig");
require("dotenv").config();

const port = process.env.PORT;

const { createProduct } = require("./src/services/product");
const { tableCreator } = require("./src/config/databaseConfig");
const { router } = require("./src/router/productRouters");

const dataConnect = database
  .connect()
  .then((data) => {
    console.log(`database up `);
  })
  .catch((err) => {
    console.log(err);
  });

// create tables
tableCreator();

app.listen(port, (req, res) => {
  console.log(`server is up on port ${port}`);
});

app.use(express.json());
app.use("/api/v1", router);
