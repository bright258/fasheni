const express = require("express");
const user = express();
const {
  userCreate,
  userList,
  getSingleUser,
  userDeletion,
  userUpdate,
} = require("../controllers/userController");

user.post("/create", userCreate);
user.get("/list", userList);
user.get("/single", getSingleUser);
user.delete("/delete", userDeletion);
user.put("/update", userUpdate);

module.exports = { user };
