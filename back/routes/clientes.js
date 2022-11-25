const express = require("express");
const router = express.Router();
const clientesControllers = require("../controllers/clientesControlles");

router.get("/", clientesControllers.allQuestions);
router.get("/:id", clientesControllers.aboutClient);

module.exports = router;
