'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companies_sizes extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static associate({ company, sub_categories, sizes }) {
      // define association here
      this.belongsTo(company, { foreignKey: "id_company" })
      this.belongsTo(sub_categories, { foreignKey: "id_sub_category" })
      this.belongsTo(sizes, { foreignKey: "id_size" })
    }
  }
  companies_sizes.init({
    id_company: DataTypes.INTEGER,
    id_sub_category: DataTypes.INTEGER,
    id_size: DataTypes.INTEGER,
    pieces: DataTypes.INTEGER,
    flavors: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'companies_sizes',
  });
  return companies_sizes;
};
