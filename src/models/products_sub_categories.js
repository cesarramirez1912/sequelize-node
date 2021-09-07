'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_sub_categories extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static associate({ products, sub_categories }) {
      // define association here
      this.belongsTo(products, { foreignKey: "id_product" })
      this.belongsTo(sub_categories, { foreignKey: "id_sub_category" })
    }
  }
  products_sub_categories.init({
    id_product: DataTypes.INTEGER,
    id_sub_category: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products_sub_categories',
  });
  return products_sub_categories;
};
