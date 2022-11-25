const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Cliente extends Model {}

Cliente.init(
  {
    cliente: {
      type: DataTypes.STRING,
    },
    transcripcion: {
      type: DataTypes.TEXT,
    },
    escenario: {
      type: DataTypes.STRING,
    },
    linkVideo: {
      type: DataTypes.STRING,
    },
    preguntas: {
      type: DataTypes.JSON(DataTypes.ARRAY),
    },
  },
  {
    sequelize: db,
    modelName: "clientes",
  }
);

module.exports = Cliente;
