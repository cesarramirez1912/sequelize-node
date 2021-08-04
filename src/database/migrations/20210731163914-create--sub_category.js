'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("sub_categories", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_category:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'categories',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      description: {
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
    return await queryInterface.dropTable("sub_categories");
  },
};
