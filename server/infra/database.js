require("dotenv").config();
const pgp = require("pg-promise")();

const url = "postgresql://postgres:h6nqpPD8sK@localhost:5432/banco_teste";
const db = pgp(url);

module.exports = db;
