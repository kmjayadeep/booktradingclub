import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import serialize from "serialize-javascript";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";
import morgan from "morgan";
import helmet from "helmet";
import searizlize from 'serialize-javascript';
import { Provider } from "react-redux";
import { configureStore } from "../shared/redux/store";
import Routes from "./routes";
import App from "../shared/App";
import config from "./config";

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

app.use("*", handleRender);

function handleRender(req,res){
  let context = {};
  const store = configureStore();
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const preloadedState = store.getState();
  res.send(renderFullPage(markup, preloadedState));
}

function renderFullPage(markup,preloadedState){
  return `
    <html>
        <head>
            <title>BookSharingApp</title>
            <link rel="stylesheet" href="/css/main.css">
        </head>
        <body>
            <div id="app-root">${markup}</div>
            <script>
              window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
            </script>
            <script src="/bundle.js"></script>
        </body>
    </html>
  `;
}

app.listen(PORT, () => {
  console.log("Server is listening at :", PORT);
});
