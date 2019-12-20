const express = require('express');
const routes = express.Router();

const UserController = require('./controller/UserController');
const MaterialController = require('./controller/MaterialController');

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/user', UserController.show);

routes.post('/materials', MaterialController.store);
routes.get('/materials', MaterialController.index);
routes.get('/material', MaterialController.show);

module.exports = routes;