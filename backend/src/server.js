const express = require('express');
const mongoose = require("mongoose");

const app = express();

// connecting with database
mongoose.connect(
    "mongodb+srv://omnistack:backend@cluster0-voj6e.mongodb.net/test?retryWrites=true",
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(4200);