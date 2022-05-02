const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("operation", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    typeId: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.UUID,
    },
  });
};
