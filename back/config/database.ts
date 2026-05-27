import { Sequelize } from "sequelize";

const database = new Sequelize({
  dialect: "sqlite",
  storage: process.env.SQLITE_STORAGE,
  logging: false,
});

export default database;
