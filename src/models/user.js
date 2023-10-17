"use strict";
const { Model } = require("sequelize");
const bcrypt = require('bcryptjs')


module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Admins, { foreignKey: "user_id" });
    }
  }
  Users.init(
    {
      fullname: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female"],
      },
      country: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM,
        values: ["admin", "user"],
      }
    },
    {
      sequelize,
      modelName: "Users",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Users.beforeSave(async (user) => {
    console.log("before if", user);
    if (user.changed("password")) {
      console.log("after if", user);
      user.password = await bcrypt.hash(user.password, 10);
    }
  });

  Users.prototype.validatePassword = async function(password){
    const user = this;
    const isValid = await bcrypt.compare(password, user.password);

    return isValid
  }

  return Users;
};
