import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { renderRoutes } from 'react-router-config';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Topbar from "./components/TopBar";
import { routes } from './routes';

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

const renderedRoutes = renderRoutes(routes);

class App extends Component {
  render() {
    return (
       <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Topbar/>
        {renderedRoutes}
      </MuiThemeProvider>
    );
  }
}

export default App;
