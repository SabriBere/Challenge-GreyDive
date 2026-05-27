import { Sequelize } from "sequelize";
import "dotenv/config";

const database = new Sequelize({
  dialect: "sqlite",
  storage: process.env.SQLITE_STORAGE || "database.sqlite",
  logging: false,
});

export default database;
