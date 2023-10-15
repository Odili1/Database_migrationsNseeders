'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Categories)
    }
  }
  Products.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    size: {
      type: DataTypes.ENUM,
      values: ["small", "medium", "large"]
    }
  }, {
    sequelize,
    modelName: 'products',
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "updated_at"
  });
  return Products;
};