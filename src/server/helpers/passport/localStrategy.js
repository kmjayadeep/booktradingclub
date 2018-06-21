import jwt from "jsonwebtoken";
import User from "../../models/User";
import { Strategy as PassportLocalStrategy } from "passport-local";
import config from "../../config";

export default new PassportLocalStrategy(
  {
    usernameField: "email",
    passwordField: "password"
  },
  (email, password, done) => {
    // find a user by email address
    return User.findOne({ email })
      .then(user => {
        if (!user) {
          const error = {
            message: "Incorrect Email Id or Password"
          };
          return done(error);
        }

        // check if a hashed user's password is equal to a value saved in the database
        if (user.comparePassword(password)) {
          const { _id, name, email, city, address, state, contact } = user;

          return done(null, {
            _id,
            name,
            email,
            city,
            address,
            state,
            contact
          });
        } else {
          const error = {
            message: "Incorrect Email Id or Password"
          };
          return done(error);
        }
      })
      .catch(err =>
        done({
          message: "Unable to login",
          error: err
        })
      );
  }
);
