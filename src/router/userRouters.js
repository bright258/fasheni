const express = require("express");
const user = express();
const {
  userCreate,
  userList,
  getSingleUser,
  userDeletion,
  userUpdate,
  userLogin,
} = require("../controllers/userController");

user.post("/signup", userCreate);
user.get("/list", userList);
user.get("/single", getSingleUser);
user.delete("/delete", userDeletion);
user.put("/update", userUpdate);
user.post("/login", userLogin);

module.exports = { user };
