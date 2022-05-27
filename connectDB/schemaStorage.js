const { Double } = require("bson");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

let storageSchema = new schema(
  {
    name: String,
    quantity: Number,
    price: Number,
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
