const express = require("express");
const router = express.Router();

const { gettingInfoStorage } = require("../controller/store");

router.get("/", gettingInfoStorage);

module.exports = router;
