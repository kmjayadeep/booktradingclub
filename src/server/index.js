import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import serialize from "serialize-javascript";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";
import morgan from "morgan";
import session from "express-session";
import Controllers from "./controllers";
import App from "../shared/App";
import config from "./config";
import passportHelper from "./helpers/passport";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
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

passportHelper(passport);

app.use("/api", Controllers);

app.use("*", (req, res, next) => {
  let context = {};
  const markup = renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      <App />
    </StaticRouter>
  );
  res.send(`
    <html>
        <head>
            <title>BookSharingApp</title>
            <link rel="stylesheet" href="/css/main.css">
        </head>
        <body>
            <div id="app-root">${markup}</div>
            <script src="/bundle.js"></script>
        </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server is listening at :", PORT);
});
