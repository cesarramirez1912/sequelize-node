'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("companies_sizes", {
      id_company:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model:'companies',key:'id'},
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
      id_size:{
        type: Sequelize.INTEGER,
        references:{model:'sizes',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      pieces : {
        type: Sequelize.INTEGER,
      },
      flavors :{
        type: Sequelize.INTEGER,
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
    return await queryInterface.dropTable("companies_sizes");
  },
};

