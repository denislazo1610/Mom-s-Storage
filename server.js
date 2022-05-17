const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is testing");
  console.log("This is working");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
