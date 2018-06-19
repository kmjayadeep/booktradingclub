import React, { Component } from "react";
import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/Signup";
import { Route } from "react-router-dom";
import Topbar from "./components/TopBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#26a69a"
    },
    secondary: {
      main: "#ec407a"
    }
  }
});

class App extends Component {
  render() {
    return (
       <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Topbar/>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </MuiThemeProvider>
    );
  }
}

export default App;
