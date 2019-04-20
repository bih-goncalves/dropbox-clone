const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

// isolating users to boxes and to not access another users informations
io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
});

// connecting with database
mongoose.connect(
    "mongodb+srv://omnistack:backend@cluster0-voj6e.mongodb.net/test?retryWrites=true",
    {
        useNewUrlParser: true
    }
);

// use a connection
app.use((req, res, next) => {
    req.io = io;
    // continue the requisitions for the app
    return next();
});

app.use(express.json()); // to use json objects
app.use(express.urlencoded({ extended: true })); // to use files
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))); //to access files

app.use(require('./routes'));

server.listen(4200);