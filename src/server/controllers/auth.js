import express from "express";
import User from "../models/User";
const controller = express.Router();

controller.post("/login/basic", (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user == null)
        return res.status(401).json({
          message: "Invalid email Id"
        });
      if (user.comparePassword(req.body.password)) {
        const { name, email, city, address, state, contact } = user;
        return res.json({
          name,
          email,
          city,
          address,
          state,
          contact
        });
      }
      return res.status(401).json({
        message: "Invalid Password"
      });
    })
    .catch(err => {
      console.error(err);
      res.status(400).json({
        message: "Unable to Login",
        error: err
      });
    });
});

controller.put("/signup", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(savedUser => {
      const { name, email} = savedUser;
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
