'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  /**
 * Helper method for defining associations.
 * This method is not a part of Sequelize lifecycle.
 * The `models/index` file will call this method automatically.
 */
  class sales extends Model {
    static associate({ company, clients }) {
      // define association here
      this.belongsTo(company, { foreignKey: 'id_company' })
      this.belongsTo(clients, { foreignKey: 'id_client' })
    }
  };
  sales.init({
    id_company: DataTypes.INTEGER,
    id_client: DataTypes.INTEGER,
    date: DataTypes.DATE,
    table: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sales',
  });
  return sales;
};