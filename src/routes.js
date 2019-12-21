const express = require('express');
const routes = express.Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

const UserController = require('./controller/UserController');
const MaterialController = require('./controller/MaterialController');
const RentController = require('./controller/RentController');
const SessionController = require('./controller/SessionController');
const TestController = require('./controller/TestController');



//Don't change nothing above;
routes
.get('/session', SessionController.store)

.get('/test',multer(multerConfig).single('image'), TestController.index)

.post('/users', UserController.store)
.get('/users', UserController.index)
.get('/user', UserController.show)

.post('/materials', MaterialController.store)
.get('/materials', MaterialController.index)
.get('/material', MaterialController.show)

.post('/rents', RentController.store)
.get('/rents', RentController.index)
.get('/rent', RentController.show);

module.exports = routes;