const Clientes = require("../models/Clientes");
const seedClientes = require("./db.json")


async function seedFuntion() {
  const clientes = seedClientes;
  
  for (let index = 0; index < clientes.length; index++) {
    Clientes.create({
      cliente: clientes[index].cliente,
      escenario: clientes[index].escenario,
      transcripcion: clientes[index].transcripcion,
      linkVideo: clientes[index].linkVideo,
      preguntas: clientes[index].preguntas
    });
  }
}
seedFuntion();


