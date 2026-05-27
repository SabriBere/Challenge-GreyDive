import { DataTypes, Model, type InferAttributes, type InferCreationAttributes } from "sequelize";
import database from "../config/database";

class Cliente extends Model<InferAttributes<Cliente>, InferCreationAttributes<Cliente>> {
  declare id: string;
  declare cliente: string;
  declare transcripcion: string;
  declare escenario: string;
  declare linkVideo: string;
  declare preguntas: unknown;
}

Cliente.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
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
      type: DataTypes.JSON,
    },
  },
  {
    sequelize: database,
    modelName: "clientes",
  }
);

export default Cliente;
