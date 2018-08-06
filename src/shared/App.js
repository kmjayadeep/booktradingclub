import React, {Component, Fragment} from 'react';
import {renderRoutes} from 'react-router-config';
import Topbar from './components/TopBar';
import {routes} from './routes';
import {connect} from 'react-redux';

import './App.css';
// import 'mdbootstrap/css/bootstrap.min.css'

const renderedRoutes = renderRoutes(routes);

const mapStateToProps = state => {
  return {isAuth: state.authUser.isAuth, user: state.authUser.user};
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <Topbar {...this.props}/>
        {renderedRoutes}
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
