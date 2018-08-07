import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
  Card,
  CardBody,
  CardImg,
  Container,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

import "./Login.css";

class Login extends Component {
  render() {
    return (
      <Container>
        <Card id="login-card">
          <CardImg top width="100%" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
          <CardBody>
            <CardTitle>Login</CardTitle>
            <CardSubtitle>To access thousands of books around you</CardSubtitle>
            <Form id="login-form">
            <Input type="email" name="email" id="inputEmail" placeholder="Email Address" required/>
            <Input type="password" name="password" id="inputPassword" placeholder="Password" required/>
            <Button color="primary" block>Sign In</Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default Login;
