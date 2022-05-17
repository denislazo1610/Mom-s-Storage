const express = require("express");
const app = express();
const connectDB = require("./connectDB/connect");
const port = process.env.PORT || 3000;

connectDB();

app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
