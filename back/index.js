// Configuración del server
const express = require("express")
const models = require("./models/index")
const cors = require("cors")

const app = express()
const db = require("./config/db")


// Express Route File Requires
const routes = require("./routes")
app.use(express.json())
app.use(cors())

// Express Routing

app.use("/api", routes)

db.sync({ force: false }).then(() => {
  console.log("db connected")
  app.listen(8080, () => {
    console.log("Server listening at port 8080")
  })
})