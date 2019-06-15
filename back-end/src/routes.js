const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

// 
routes.post('/boxes', BoxController.store);
routes.get('/boxes/:title', BoxController.show);
routes.post('/boxes/:title/files', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;