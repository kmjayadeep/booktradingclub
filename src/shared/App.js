import React, {Component, Fragment} from 'react';
import {renderRoutes} from 'react-router-config';
import Topbar from './components/TopBar';
import {routes} from './routes';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './App.css';

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

export default withRouter(connect(mapStateToProps)(App));
