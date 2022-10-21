const pgp = require("pg-promise")();
require("dotenv").config();
const db_url = process.env.DATABASE_URL;

const database = pgp(db_url);

module.exports = { database };
