const mongoose = require("mongoose");
const schema = mongoose.Schema;

let storageCustomer = new schema(
  {
    FirstName: String,
    LastName: String,
    BornPlace: String,
    Trust: Number,
    Birthday: String,
    Residence: String,
    LastActionActive: String,
  },
  {
    collection: "customer",
    versionKey: false,
  }
);

const customer = mongoose.model("Customer", storageCustomer);

module.exports = customer;
