const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("type", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
