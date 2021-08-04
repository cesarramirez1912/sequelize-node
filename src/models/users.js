'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Role}) {
      // define association here
      //console.log(Role);
    this.hasMany(Role, { foreignKey: 'id_user', as: 'users' });
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