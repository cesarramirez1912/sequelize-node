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
  class users extends Model {
    static associate({ company, users_roles }) {
      // define association here
      this.belongsTo(company, { foreignKey: 'id_company' })
      this.hasMany(users_roles, { foreignKey: 'id_user' })
    }
  };
  users.init({
    id_company: DataTypes.INTEGER,
    description: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};