"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id_company:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'companies',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      status:{
        type: Sequelize.INTEGER,
        defaultValue: 1
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("users");
  },
};
