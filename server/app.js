const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');

const PORT = process.env.PORT;

app.use(cors({ origin: true }));

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(require('./router/auth'));

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
});