const express = require("express");
const router = express.Router();

const {
  gettingInfoCustomers,
  gettingSingleCustomer,
  creatingNewCustomer,
  updatingCustomer,
  deletingCustomer,
} = require("../controller/customer");

router.get("/", gettingInfoCustomers);

router.get("/:id", gettingSingleCustomer);

router.post("/", creatingNewCustomer);

router.put("/:id", updatingCustomer);

router.delete("/:id", deletingCustomer);

module.exports = router;
