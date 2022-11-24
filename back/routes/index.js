const express = require("express");
const router = express.Router();
const recordersRoute = require("./recorders")
const clientesRoute = require("./clientes")

// router.use("/recorder", recordersRoute)
router.use("/clientes", clientesRoute)









module.exports = router;