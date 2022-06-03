const express = require("express");
const router = express.Router();
const { testing } = require("../controller/index");

router.use("/store", require("./store"));

router.use("/customer", require("./customer"));

module.exports = router;
