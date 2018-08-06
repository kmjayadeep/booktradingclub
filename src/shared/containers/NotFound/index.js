import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class NotFound extends Component {
  render() {
    return (
      <Jumbotron className="text-center">
        <h1 className="display-3">Oops!</h1>
        <p className="lead">The Page you are looking for is not found</p>
      </Jumbotron>
    );
  }
}

export default NotFound;
