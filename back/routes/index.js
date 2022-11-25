const express = require("express");
const router = express.Router();
const clientesRoute = require("./clientes");

router.use("/clientes", clientesRoute);

module.exports = router;
