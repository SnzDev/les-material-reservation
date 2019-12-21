'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users', { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        registrationNumber: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt:{
          type: Sequelize.DATE,
          allowNull:false,
        },
        updatedAt:{
          type: Sequelize.DATE,
          allowNull: false,
        },

      });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('Users');
  }
};
