const express = require("express");
const router = express.Router();
const { testing } = require("../controller/index");

router.use("/store", require("./store"));

module.exports = router;
