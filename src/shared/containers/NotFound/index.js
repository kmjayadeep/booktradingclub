import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import "./NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <Container className="pad-top">
        <Row>
          <Col className="text-center">
            <span className="display-1 d-block">404</span>
            <div className="mb-4 lead">The page you are looking for was not found.</div>
            <Button><Link to="/">Back to Home</Link></Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NotFound;
