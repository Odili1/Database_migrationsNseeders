'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Products, {foreignKey: "categories_id"})
    }
  }
  Categories.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Categories',
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
  return Categories;
};