// config.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  dbPassword: process.env.DATABASE_PASSWORD,
};
