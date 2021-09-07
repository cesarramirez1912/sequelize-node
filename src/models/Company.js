'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users }) {
      // define association here
      this.hasMany(users, { foreignKey: "id_company" })
    }
  };
  company.init({
    description: DataTypes.STRING,
    email:
      DataTypes.STRING,
    phone: DataTypes.STRING,
    tables: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};