const express = require("express");
const sequelize = require("./Database/sequelize");
const userRoutes = require("./Users/user.routes");
const productsRoutes = require("./products/products.routes");
require("dotenv").config();

// Intialize App
const app = express();

// Port
const port = process.env.PORT;

// Express Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/products", productsRoutes);

// Uncaught Route
app.get("*", (req, res) => {
  console.log("404");
  res.status(404).json({
    data: null,
    error: "Route not found",
  });
});

// Testing DB connection
sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected successfully`);
  })
  .catch((error) => {
    console.log(`An error occured while connecting to database`);
  });

// Server
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
