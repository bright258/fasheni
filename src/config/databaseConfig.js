const pgp = require("pg-promise")();
require("dotenv").config();
const db_url = process.env.DATABASE_URL;
const { HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

// const database = pgp(db_url);

// database details
const cn = {
  host: HOST,
  port: DB_PORT,
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
};

// product table creator function
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

// user table creator function

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
