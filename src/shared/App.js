import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { renderRoutes } from 'react-router-config';
import Topbar from "./components/TopBar";
import { routes } from './routes';

import './App.css';
//fix css fonts

const renderedRoutes = renderRoutes(routes);

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline/>
        <Topbar/>
        {renderedRoutes}
      </Fragment>
    );
  }
}

export default App;
