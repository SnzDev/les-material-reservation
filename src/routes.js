const express = require('express');
const routes = express.Router();

const UserController = require('./controller/UserController');
const MaterialController = require('./controller/MaterialController');
const RentController = require('./controller/RentController');
const SessionController = require('./controller/SessionController');



//Don't change nothing above;
routes
.get('/session', SessionController.store)

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