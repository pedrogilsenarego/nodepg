const pool = require("./db");
const queries = require("./queries");

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUsersById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addUser = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (error) throw error;
    if (results.rows.length) {
      res.send("Email already used");
    }
    pool.query(queries.addUser, [name, email, age, dob], (error, results) => {
      if (error) throw error;
      res.status(201).send("User added successfully");
    });
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
};
