import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route } from "react-router-dom";
import Topbar from "./components/TopBar";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Topbar/>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default App;
