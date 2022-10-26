const pgp = require("pg-promise")();
require("dotenv").config();
const db_url = process.env.DATABASE_URL;

// const database = pgp(db_url);

const cn = {
  host: "localhost",
  port: 5432,
  database: "atadb",
  user: "george",
  password: "password",
};

const productTableCreator = async () => {
  try {
    const dt = await database.query(
      `CREATE TABLE IF NOT EXISTS 
        productss(
        id SERIAL,
        name VARCHAR UNIQUE, 
        price INT , 
        description VARCHAR )`
    );
  } catch (err) {
    console.log(err);
  }
};

const userTableCreator = async () => {
  try {
    await database.query(
      `CREATE TABLE IF NOT EXISTS 
        userss(
        id SERIAL,
        username VARCHAR, 
        password VARCHAR 
        )`
    );
  } catch (err) {
    console.log(err);
  }
};

const database = pgp(cn);

module.exports = { database, productTableCreator, userTableCreator };
