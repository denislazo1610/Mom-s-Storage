const express = require("express");
const router = express.Router();

const {
  gettingInfoStorage,
  gettingSingleData,
  creatingNewData,
} = require("../controller/store");

router.get("/", gettingInfoStorage);
router.get("/:id", gettingSingleData);

router.post("/", creatingNewData);

module.exports = router;
