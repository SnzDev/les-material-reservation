const dbconfig = require("../config/database");
const Sequelize = require("sequelize");
const connection = new Sequelize(dbconfig);

const User = require('../model/User');
const Material = require('../model/Material');
const Rent = require('../model/Rent');

User.init(connection);
Material.init(connection);
Rent.init(connection);

User.associate(connection.models);
Material.associate(connection.models);
Rent.associate(connection.models);

module.exports = connection;