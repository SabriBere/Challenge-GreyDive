import database from "./database";
import Clientes from "../models/Clientes";
import { testMocks } from "../mocks/test";

async function seedFunction() {
  await database.sync({ force: true });
  await Clientes.bulkCreate(testMocks);
  await database.close();
}

seedFunction()
  .then(() => {
    console.log("Test mocks seeded successfully");
  })
  .catch((error) => {
    console.error("Error seeding test mocks", error);
  });
