'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users, roles }) {
      this.belongsTo(users, { foreignKey: "id_user" })
      this.belongsTo(roles, { foreignKey: "id_role" })
    }
  };
  users_roles.init({
    id_user: DataTypes.INTEGER,
    id_role: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_roles',
  });
  return users_roles;
};

