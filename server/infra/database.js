require("dotenv").config();
const pgp = require("pg-promise")();

const url = "conexão do seu banco";
const db = pgp(url);

module.exports = db;
