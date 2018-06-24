import express from "express";
import User from "../models/User";
const controller = express.Router();

controller.get('/', (req, res) => {
  User.find().then(users => {
    res.json(users);
  });
});

controller.put('/', (req, res) => {
  const User = new User(req.body);
  User.save().then(b => {
    res.json(b);
  }).catch(err=>{
    res.status(400).json({
      message: "Unable to save User",
      error: err
    })
  })
});

export default controller;
