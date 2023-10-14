const express = require("express");
const userRoutes = require('./Users/userRoutes');
const db = require('./Database/mongo');
require('dotenv').config();

// Intialize App
const app = express();

// Connect to Database
db.connectDB()

// Express Middleware
app.use(express.json());


// Routes
app.use('/', userRoutes);


// catch Errors
app.use('*', (req, res) => {
    return res.status(404).json({
        data: null,
        message: "Route not found"
    })
})


// Port
const port = process.env.PORT


// Server
app.listen(port, ()=> {
    console.log(`App started on port ${port}`);
});


