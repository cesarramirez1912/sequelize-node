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
  class clients extends Model {
    static associate({ company }) {
      // define association here
      this.belongsTo(company, { foreignKey: 'id_company' })
    }
  };
  clients.init({
    id_company: DataTypes.INTEGER,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'clients',
  });
  return clients;
};