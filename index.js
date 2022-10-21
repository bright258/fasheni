const express = require("express");
const app = express();
const pgp = require("pg-promise")();
const { database } = require("./src/config/databaseConfig");
require("dotenv").config();

const port = process.env.PORT;
database
  .connect()
  .then(() => {
    console.log(`database up`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, (req, res) => {
  console.log(`server is up on port ${port}`);
});
