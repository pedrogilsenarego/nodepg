const express = require("express");
const userRoutes = require("./src/users/routes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to this postGres server");
});

app.use("/api/v1/users", userRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
