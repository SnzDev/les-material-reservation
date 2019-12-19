const express = require('express');
const routes = express.Router();

const UserController = require('./controller/UserController');

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/user', UserController.show);


module.exports = routes;