'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_companies extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static associate({ company, products_sub_categories, sizes }) {
      // define association here
      this.belongsTo(company, { foreignKey: "id_company" })
      this.belongsTo(products_sub_categories, { foreignKey: "id_product_sub_category" })
      this.belongsTo(sizes, { foreignKey: "id_size" })
    }
  }
  products_companies.init({
    id_company: DataTypes.INTEGER,
    id_product_sub_category: DataTypes.INTEGER,
    id_size: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    available: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products_companies',
  });
  return products_companies;
};
