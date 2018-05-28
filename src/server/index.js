import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import serialize from "serialize-javascript";

import App from "../shared/App";

const app = express();

app.use(express.static("public"));

app.use("*", (req, res, next) => {
  const initialData = {
    name: 'World'
  }
  let context = {};
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
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
})

app.listen(process.env.PORT || 3000, () => {
  console.log("server is listening");
})