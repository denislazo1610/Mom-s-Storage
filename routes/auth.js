const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/google" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/store");
  }
);

module.exports = router;
