'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("products_sub_categories", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_product:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'products',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      id_sub_category:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'sub_categories',key:'id'},
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
    return await queryInterface.dropTable("products_sub_categories");
  },
};
