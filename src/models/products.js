'use strict';
const {
  Model
} = require('sequelize');
const categories = require('./categories');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Categories, {foreignKey: "categories_id"})
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    size: {
      type: DataTypes.ENUM,
      values: ["small", "medium", "large"]
    }
  }, {
    sequelize,
    modelName: 'Products',
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
  return Products;
};