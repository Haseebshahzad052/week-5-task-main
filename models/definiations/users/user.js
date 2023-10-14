const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbconnection");

const user = sequelize.define(
  "user",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstname: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    lastname: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    phoneNumber: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "user",
  }
);
module.exports = user;
