const express = require("express");
const router = express.Router();
const recordersRoute = require("./recorders")

router.use("/allRecorders", recordersRoute)






module.exports = router;