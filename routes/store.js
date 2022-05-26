const express = require("express");
const router = express.Router();

const {
  gettingInfoStorage,
  gettingSingleData,
  creatingNewData,
  updatingData,
  deletingData,
} = require("../controller/store");

router.get("/", gettingInfoStorage);
router.get("/:id", gettingSingleData);

router.post("/", creatingNewData);

router.put("/:id", updatingData);

router.delete("/:id", deletingData);

module.exports = router;
