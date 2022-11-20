const Sequelize = require("sequelize")

// Borrar contraseña de postgress y cambiar por "null si estás en Linux"
const db = new Sequelize("greydive", "postgres", "1234", {

  host: "localhost",
  dialect: "postgres",
  logging: false,
})

module.exports = db
