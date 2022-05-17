const mongoose = require("mongoose");
require("dotenv").config();

const URI = `mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@cluster0.rcw9d.mongodb.net/store?retryWrites=true&w=majority`;

const connectDB = () => {
  mongoose.connect(URI);
  console.log("db Connected..!");
};

module.exports = connectDB;
