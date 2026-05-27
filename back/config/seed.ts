import Clientes from "../models/Clientes";
import seedClientes from "./db.json";

async function seedFunction() {
  await Clientes.bulkCreate(seedClientes);
}

seedFunction();
