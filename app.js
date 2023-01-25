const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const port = 3000

app.use(bodyParser.json());





const connectDB = require('./config/db');
// Load Config
dotenv.config({path: './config/config.env'})

connectDB();

// Routes



// port initialization ......................

app.listen(port, () =>{
    console.log(`App is running on port: ${port}`);
});



module.exports = app