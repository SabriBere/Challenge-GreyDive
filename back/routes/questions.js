const express = require("express");
const router = express.Router();
const questionsControllers = require("../controllers/questionsControlles")

router.get("/", questionsControllers.allQuestions)


module.exports = router;