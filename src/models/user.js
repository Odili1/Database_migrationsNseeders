'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Admins, {foreignKey: user_id})
    }
  }
  Users.init({
    id: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    phone_number: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ["male", "female"]
    },
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
  return Users;
};