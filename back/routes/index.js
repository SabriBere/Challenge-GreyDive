const express = require("express");
const router = express.Router();
const recordersRoute = require("./recorders")
const questionsRoute = require("./questions")

router.use("/recorder", recordersRoute)
router.use("/questions", questionsRoute)







module.exports = router;