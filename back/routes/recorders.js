const express = require("express");
const router = express.Router();
const recordersControllers = require("../controllers/recordersControllers")

router.post("/save", recordersControllers.createRecords)

module.exports = router;