const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id = $1";
const checkEmailExists = "SELECT u FROM users u WHERE u.email = $1";
const addUser =
  "INSERT INTO users (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteUser = "DELETE FROM users WHERE id = $1";
const updateUser = "UPDATE users SET name = $1 WHERE id = $2";

module.exports = {
  getUsers,
  getUsersById,
  checkEmailExists,
  addUser,
  deleteUser,
  updateUser,
};
