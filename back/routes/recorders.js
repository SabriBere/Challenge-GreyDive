const express = require("express");
const router = express.Router();
const recordersControllers = require("../controllers/recordersControllers")

router.get("/", recordersControllers.allRecords)

module.exports = router;