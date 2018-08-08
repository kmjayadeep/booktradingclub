import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import { logoutUser } from '../../redux/actions/auth';

const mapStateToProps = state => {
  return {
    isAuth: state.authUser.isAuth
  };
};

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
  }
  render() {
    if (!this.props.isAuth) return <Redirect to="/" />;
    return (
      <Container className="pad-top">
        <Row>
          <Col className="text-center">
            <h3>Logging out</h3>
            <div className="mb-4 lead">Please Wait..</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const ConnectedComponent = connect(
  mapStateToProps,
  { logoutUser }
)(Logout);
export default ConnectedComponent;
