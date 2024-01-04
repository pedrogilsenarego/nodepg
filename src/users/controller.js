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

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUsersById, [id], (error, results) => {
    const noUserFound = !results.rows.length;
    if (noUserFound) {
      res.send("User does not exist in database, could not be removed");
    }
    pool.queury(queries.deleteUser, [id], (error, results) => {
      if (error) throw error;
      res.send(200).send("User removed successfully");
    });
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(queries.getUsersById, [id], (error, results) => {
    const noUserFound = !results.rows.length;
    if (noUserFound) {
      res.send("User does not exist in database, could not be updated");
    }
    pool.query(queries.updateUser, [name, id], (error, results) => {
      if (error) throw error;
      res.send(200).send("User updated successfully");
    });
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
};
