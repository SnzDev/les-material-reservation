const dbconfig = require("../config/database");
const Sequelize = require("sequelize");
const connection = new Sequelize(dbconfig);

const User = require('../model/User');
const Material = require('../model/Material');

User.init(connection);
Material.init(connection);

module.exports = connection;