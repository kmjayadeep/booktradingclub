import User from "../models/User";
import passport from "passport";
import moongooseErrorFormatter from "../helpers/mongooseErrorFormatter";

export const loginBasic = credentials => {
  return new Promise((resolve, reject) => {
    passport.authenticate("local", { session: false }, (err, token, user) => {
      if (err || !token) {
        return reject(new Error(err));
      }
      return resolve({ token, user });
    })({ body: credentials });
  });
};

//need req param to parse query parameters by passport
//need res param to redirect to google auth url
export const loginGoogle = (req, res) => {
  passport.authenticate("google", {
    session: false,
    scope: [
      "https://www.googleapis.com/auth/plus.login",
      "https://www.googleapis.com/auth/plus.profile.emails.read"
    ]
  })(req, res);
};

//need req param to parse profile from google
export const loginGoogleCallback = req => {
  return new Promise((resolve, reject) => {
    passport.authenticate("google", { session: false }, (err, token, user) => {
      if (err || !token) {
        return reject(new Error(err));
      }
      return resolve({ token, user });
    })(req);
  });
};

export const signupBasic = async body => {
  const { name, email, password } = body;
  const user = new User({
    name,
    email,
    password
  });
  try {
    const { name, email } = await user.save()
    return { name, email };
  } catch (err) {
    throw moongooseErrorFormatter(err);
  }
};