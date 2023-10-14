const express = require("express");
require('dotenv').config();

// Intialize App
const app = express();

// Port
const port = process.env.PORT

// Express Middleware
app.use(express.json());


// Routes
app.use('/', user.routes)


// Server
app.listen(port, ()=> {
    console.log(`App started on port ${port}`);
})


