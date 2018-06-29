import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../shared/App";
import { configureStore } from "./store";

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = configureStore(preloadedState);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app-root")
);
