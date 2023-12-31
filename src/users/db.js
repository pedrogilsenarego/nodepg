const { dbPassword } = require("../../config");

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ritz",
  password: dbPassword,
  port: 5432,
});

module.exports = pool;
