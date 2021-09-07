'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_categories extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static associate({ categories }) {
      // define association here
      //this.hasMany(users_roles, { foreignKey: "id_role" })
      this.belongsTo(categories, { foreignKey: "id_category" })
    }
  }
  sub_categories.init({
    id_category: DataTypes.INTEGER,
    description: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sub_categories',
  });
  return sub_categories;
};
