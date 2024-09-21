const express = require('express');
require('dotenv').config();
const ConnectDB = require('./config/db');
const routes = require('./routes/routes');


//DB connection 
ConnectDB()

const app = express()


// Middleware to prase JSON
app.use(express.json());

// Routes 
app.use('/snc/v1/emp', routes);

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})