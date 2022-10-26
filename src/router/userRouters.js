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
const { verify } = require("../middleware/userVerification");

// user routes

user.post("/signup", userCreate);
user.get("/list", verify, userList);
user.get("/single", getSingleUser);
user.delete("/delete", verify, userDeletion);
user.put("/update", verify, userUpdate);
user.post("/login", userLogin);

module.exports = { user };
