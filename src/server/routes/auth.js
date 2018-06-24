import express from "express";
import User from "../models/User";
const controller = express.Router();
import {
  loginBasic,
  loginGoogle,
  loginGoogleCallback,
  signupBasic
} from "../controllers/AuthController";

import ErrorCodes from "../helpers/errorCodes";

controller.post("/login/basic", (req, res) => {
  const { email, password } = req.body;
  loginBasic({ email, password })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(401).json({
        message: "Invalid email or password",
        errror: err
      });
    });
});

controller.get("/login/google", loginGoogle);

controller.get("/login/google/callback", (req, res) => {
  loginGoogleCallback(req)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(401).json({
        message: "Unable to login",
        error: err
      });
    });
});

controller.put("/signup", (req, res) => {
  signupBasic(req.body)
    .then(result => {
      return res.json(result);
    })
    .catch(err => {
      res.status(400).json({
        message: formatErrorMessage(err)
      });
    });
});

const formatErrorMessage =  error => {
  switch (error.code) {
    case ErrorCodes.UNKNOWN:
      return 'Unknown Error';
    case ErrorCodes.REQUIRED_FIELD:
      return error.data + ' is required';
    case ErrorCodes.DUPLICATE_KEY:
      return 'There is already an account with the same Email Id. Please login';
  }
  return error;
};

export default controller;
