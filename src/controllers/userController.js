const {
  createUser,
  listUser,
  getUser,
  deleteUser,
  updatedUser,
} = require("../services/user");

const { signUp } = require("../utils/signUp");
const { signIn } = require("../utils/signIn");

const userCreate = async (req, res) => {
  try {
    const username = req.body.username;
    const password = signUp(req.body.password);
    const user = await createUser({ username, password });
    user && res.status(201).json("user created");
    return user;
  } catch (e) {
    console.log(e);
  }
};

const userList = async (req, res) => {
  try {
    const users = await listUser();
    users && res.status(200).json(users);
  } catch (e) {
    console.log(e);
  }
};

const getSingleUser = async (req, res) => {
  const id = req.query.id;
  //   console.log(id);
  try {
    const user = await getUser(id);
    if (!user) {
      res.status(500).json("user not found");
    }
    user && res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }
};

const userDeletion = async (req, res) => {
  const id = req.query.id;
  //   console.log(id);

  try {
    const user = await deleteUser(id);
    user && res.status(200).json("user deleted");
  } catch (e) {
    console.log(e);
  }
};

const userUpdate = async (req, res) => {
  const body = req.body;
  const id = req.query.id;
  // console.log(body);
  try {
    const product = await updatedUser(id, body);
    product && res.status(200).json("user updated");
  } catch (e) {
    console.log(e);
  }
};

const userLogin = async (req, res) => {
  try {
    const body = req.body;
    const user = await signIn(body);
    user && res.status(200).json(user);
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  userCreate,
  userList,
  getSingleUser,
  userDeletion,
  userUpdate,
  userLogin,
};
