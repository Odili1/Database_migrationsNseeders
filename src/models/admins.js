'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {foreignKey: user_id})
    }
  }
  Admins.init({
    username: DataTypes.STRING,
    role: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Admins',
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
  return Admins;
};