const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`server is up on port ${port}`);
});
