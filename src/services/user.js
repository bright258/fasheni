const { database } = require("../config/databaseConfig");

const createUser = async (body) => {
  // console.log("hello", body.description);
  try {
    const input = await database.query(
      "INSERT INTO userss(username, password) VALUES(${username}, ${password})",
      {
        username: body.username,
        password: body.password,
      }
    );

    return input;
  } catch (e) {
    return { e };
  }
};

const listUser = async () => {
  try {
    const output = await database.manyOrNone(
      "SELECT * FROM userss ORDER BY username DESC"
    );

    return output;
  } catch (e) {
    return { e };
  }
};

const getUser = async (id) => {
  try {
    const user = await database.any("SELECT * FROM userss WHERE id = ${id}", {
      id: id,
    });

    return { user };
  } catch (e) {
    return { e };
  }
};

const deleteUser = async (id) => {
  //   console.log(id);
  try {
    const user = await database.any("DELETE FROM userss WHERE id = ${id}", {
      id: id,
    });
    return user;
  } catch (e) {
    return e;
  }
};

const updatedUser = async (id, body) => {
  //   console.log(body.username);
  try {
    const user = await database.any(
      `
    UPDATE userss
    SET  username= $(username), password = $(password) WHERE id = $(id) `,
      {
        username: body.username,
        password: body.password,
        id: id,
      }
    );
    return user;
  } catch (e) {
    return e;
  }
};

module.exports = { createUser, listUser, getUser, deleteUser, updatedUser };
