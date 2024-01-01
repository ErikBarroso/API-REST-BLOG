const pgp = require("pg-promise")();
const db = pgp({
  user: "postgres",
  password: "erik425109",
  host: "localhost",
  port: 5432,
  database: "blog",
});

module.exports = db;
