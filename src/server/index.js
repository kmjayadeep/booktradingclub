import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import App from "../shared/App";

const app = express();

app.use(express.static("public"));

app.use("*", (req, res, next) => {
  res.send(`
    <html>
        <head>
            <title>Hello world</title>
            <link rel="stylesheet" href="/css/main.css">
        </head>
        <body>
            <div id="app-root">${renderToString(<App/>)}</div>
            <script src="/bundle.js"></script>
        </body>
    </html>
  `);
})

app.listen(process.env.PORT || 3000, () => {
  console.log("server is listening");
})