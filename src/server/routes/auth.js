import express from "express";
const router = express.Router();
import {
  loginBasic,
  loginGoogle,
  loginGoogleCallback,
  signupBasic
} from "../controllers/AuthController";

import ErrorCodes from "../helpers/errorCodes";

router.post("/login/basic", async(req, res) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await loginBasic({ email, password });
    res.cookie('token', token);
    res.json({ token, user });
  } catch (err) {
    res.status(401).json({
      message: "Invalid Email or Password",
      errror: err
    });
  }
});

router.get("/login/google", loginGoogle);

router.get("/login/google/callback", async(req, res) => {
  try {
    const { token } = await loginGoogleCallback(req)
    res.cookie('token', token);
    res.redirect('/');
  } catch (err) {
    res.status(401).json({
      message: "Unable to login",
      error: err
    });
  }
});

router.post("/signup", async(req, res) => {
  try {
    const result = await signupBasic(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({
      message: formatErrorMessage(err)
    });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
})

const formatErrorMessage = error => {
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

export default router;