import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";
import morgan from "morgan";
import helmet from "helmet";
import { configureStore } from "../shared/redux/store";
import Routes from "./routes";
import config from "./config";
import { renderMarkup, renderHtml } from './render';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(express.static("public"));
app.use(morgan("tiny"));

mongoose.connect(config.dbUrl).then(
  () => {
    console.log("Mongodb connected");
  },
  err => {
    console.error("Mongodb error :", err);
  }
);

import localStrategy from "./helpers/passport/localStrategy";
import googleStrategy from "./helpers/passport/googleStrategy";
passport.use(localStrategy);
passport.use(googleStrategy);

app.use("/api", Routes);

app.use("*", (req, res) => {
  const store = configureStore();
  const markup = renderMarkup(req.originalUrl, store);
  const preloadedState = store.getState();
  res.send(renderHtml(markup, preloadedState));
});

app.listen(PORT, () => {
  console.log("Server is listening at :", PORT);
});