import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
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
  Alert,
  FormFeedback,
  FormGroup
} from 'reactstrap';

import { loginUser } from '../../redux/actions/auth';

import "./Login.css";

const mapStateToProps = state => {
  return state.authUser;
};

class Login extends Component {
  
  state = {
    loginError: null,
    loading: false
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    const credentials = { email, password };
    this.setState({
      loading: true
    });
    try {
      await this.props.loginUser(credentials);
    } catch (err) {
      this.setState({
        loginError: err.message
      });
    }
    this.setState({
      loading: false
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state)
  };

  render() {
    if (this.props.isAuth) {
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <Card id="login-card">
          <CardImg top width="100%" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
          <CardBody>
            <CardTitle>Login</CardTitle>
            <CardSubtitle>To access thousands of books around you</CardSubtitle>
           
            <Form id="login-form">
            <Input type="email" name="email" id="inputEmail" placeholder="Email Address" required onChange={this.handleChange}/>
            <FormGroup>
            <Input type="password" name="password" id="inputPassword" placeholder="Password" required onChange={this.handleChange} invalid={this.state.loginError}/>
            <FormFeedback>{this.state.loginError}</FormFeedback>
            </FormGroup>
            <Button color="primary" block onClick={this.handleLogin}>Sign In</Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default  connect(mapStateToProps,{ loginUser })(Login);
