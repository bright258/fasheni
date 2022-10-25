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

const tableCreator = async () => {
  try {
    const dt = await database.query(
      `CREATE TABLE IF NOT EXISTS 
        prod(name VARCHAR, 
        price INT , 
        description VARCHAR )`
    );
  } catch (err) {
    console.log(err);
  }
};

const database = pgp(cn);

module.exports = { database, tableCreator };
