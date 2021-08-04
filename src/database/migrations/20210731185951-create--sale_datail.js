'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("sales_details", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_sale:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'sales',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      id_product_company: {
        type: Sequelize.INTEGER,
        references:{model:'products_companies',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      id_size:{
        type: Sequelize.INTEGER,
        references:{model:'sizes',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      price:{
        type:Sequelize.DOUBLE,
      },
      quantity:{
        type:Sequelize.INTEGER,
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
    return await queryInterface.dropTable("sales_details");
  },
};
