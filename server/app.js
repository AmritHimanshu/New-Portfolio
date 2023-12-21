const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB = `mongodb+srv://portfolio:portfolio@cluster0.kargifk.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(DB).then(() => {
    console.log("Connection successful");
}).catch((err) => console.log('No connection'));

app.get('/', (req, res) => {
    res.send("Hello world from the server");
});

app.listen(3000, () => {
    console.log(`Server is running at port no 3000`);
});