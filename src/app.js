const express = require("express");
const sequelize = require('./Database/sequelize');
const userRoutes = require('./Users/userRoutes')
require('dotenv').config();

// Intialize App
const app = express();

// Port
const port = process.env.PORT

// Express Middleware
app.use(express.json());


// Routes
app.use('/', userRoutes)


// Testing DB connection
sequelize.authenticate().then(() => {
    console.log(`Database connected successfully`);
}).catch((error) => {
    console.log(`An error occured while connecting to database`);
})

// Server
app.listen(port, ()=> {
    console.log(`App started on port ${port}`);
})


