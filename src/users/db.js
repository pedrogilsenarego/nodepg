const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ritz",
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});
