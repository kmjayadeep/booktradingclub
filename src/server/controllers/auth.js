import express from "express";
import User from "../models/User";
const controller = express.Router();
import passport from "passport";

controller.post("/login/basic", (req, res) => {
  passport.authenticate("local", { session: false }, (err, token, user) => {
    if (err || !token) {
      return res.status(401).json(err);
    }
    res.json({ token, user });
  })(req, res);
});

controller.get("/login/google", (req, res) => {
  passport.authenticate(
    "google",
    {
      session: false,
      scope: [
        "https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/plus.profile.emails.read"
      ]
    },
    (err, token, user) => {
      if (err || !token) {
        return res.status(401).json(err);
      }
      res.json({ token, user });
    }
  )(req, res);
});

controller.get("/login/google/callback", (req, res) => {
  passport.authenticate("google", { session: false }, (err, token, user) => {
    if (err || !token) {
      return res.status(401).json(err);
    }
    res.json({ token, user });
  })(req, res);
});

controller.put("/signup", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(savedUser => {
      const { name, email } = savedUser;
      return res.json({
        name,
        email
      });
    })
    .catch(err => {
      console.error(err);
      res.status(400).json({
        message: "Unable to Sign Up",
        error: err
      });
    });
});

export default controller;
