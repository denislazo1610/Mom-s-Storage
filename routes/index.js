const express = require("express");
const router = express.Router();
const { testing } = require("../controller/index");

router.use("/testing", testing);

module.exports = router;
