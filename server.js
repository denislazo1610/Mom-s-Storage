const express = require("express");
const app = express();
const connectDB = require("./connectDB/connect");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swaggerOutput.json");
const { auth, requiresAuth } = require("express-openid-connect");
// const { requiresAuth } = require("express-openid-connect");
const port = process.env.PORT || 3000;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: "http://localhost:3000",
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: `https://${process.env.ISSUER_BASE_URL}`,
};

// console.log(port == 3000 ? process.env.BASE_URL : process.env.BASE_URL_HEROKU);

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));

var options = {
  explorer: true,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app
  .use(bodyParser.json())
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
  .use("/", requiresAuth(), require("./routes/index"));

app.use((err, req, res, next) => {
  res.status(err.status);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
