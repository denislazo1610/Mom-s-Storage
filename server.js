const express = require("express");
const app = express();
const connectDB = require("./connectDB/connect");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swaggerOutput.json");
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));

var options = {
  explorer: true,
};

app
  .use(bodyParser.json())
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
  .use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
