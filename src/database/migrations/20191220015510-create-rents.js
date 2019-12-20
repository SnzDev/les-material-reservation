'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Rents', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true, 
        },
        userId: {
          type: Sequelize.INTEGER,
          references: { model: "Users", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "",
        },
        materialId: {
          type: Sequelize.INTEGER,
          references: { model: "Materials", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "",
        },
        dateStart: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        dateStop: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Rents');
  }
};
