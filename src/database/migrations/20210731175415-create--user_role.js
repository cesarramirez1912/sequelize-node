'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users_roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'users',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      id_role:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'roles',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
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
    return await queryInterface.dropTable("users_roles");
  },
};

