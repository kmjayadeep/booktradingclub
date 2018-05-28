import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route } from "react-router-dom";

import "./bootstrap.flatly.css";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default App;
