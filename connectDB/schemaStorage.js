const { Double } = require("bson");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

let storageSchema = new schema(
  {
    name: String,
    quantity: String,
    price: String,
    color: String,
    date: String,
  },
  {
    collection: "storage",
    versionKey: false,
  }
);

const storage = mongoose.model("Cloth", storageSchema);

module.exports = storage;
