const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello world from the server");
});

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
});