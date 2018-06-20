import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import serialize from "serialize-javascript";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Controllers from "./controllers";
import App from "../shared/App";

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect("mongodb://localhost/booksharingapp").then(
  () => {
    console.log("Mongodb connected");
  },
  err => {
    console.error("Mongodb error :", err);
  }
);

app.use(bodyParser.json());
app.use(express.static("public"));
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
