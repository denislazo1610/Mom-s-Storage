const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");
require("dotenv").config();
// ${process.env.dbUsername}

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        };

        console.log(newUser);
        let user = User.create(newUser);
        // done(null, profile);
        // done(null, newUser);

        // try {
        //   let user = User.findOne({ googleId: profile.id });

        //   if (user) {
        //     done(null, user);
        //   } else {
        //     user = User.create(newUser);
        //     done(null, user);
        //   }
        // } catch (err) {
        //   console.error(err);
        // }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
