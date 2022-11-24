const express = require("express");
const router = express.Router();
const clientesControllers = require("../controllers/clientesControlles")

router.get("/", clientesControllers.allQuestions)


module.exports = router;