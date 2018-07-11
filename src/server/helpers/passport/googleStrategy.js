import jwt from 'jsonwebtoken';
import User from '../../models/User';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import config from '../../config';

export default new GoogleStrategy(
  {
    clientID: config.google.clientId,
    clientSecret: config.google.clientSecret,
    callbackURL: '/api/auth/login/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    if (profile.emails.length == 0)
      return done({
        message: 'Unable to retrieve email'
      });
    const email = profile.emails[0].value;
    const googleId = profile.id;

    // find a user by email address
    return User.findOne({ email })
      .then(user => {
        if (!user) {
          const placesLived = profile._json.placesLived;
          let city = '';
          if (placesLived.length > 0) city = placesLived[0].value;
          user = new User({
            name: profile.displayName,
            email,
            city,
            google: {
              id: googleId,
              profile: profile
            }
          });
          return user.save();
        } else return Promise.resolve(user);
      })
      .then(user => {
        const payload = {
          userId: user._id
        };

        // create a token string
        const token = jwt.sign(payload, config.jwtSecret);
        const { name, email, city, address, state, contact } = user;

        return done(null, token, {
          name,
          email,
          city,
          address,
          state,
          contact
        });
      })
      .catch(err => {
        console.log(err);
        done({
          message: 'Unable to login'
        });
      });
  }
);
