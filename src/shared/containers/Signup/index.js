import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import {
  Alert,
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

import { signupUser } from '../../redux/actions/auth';
import timerPromise from '../../utils/timerPromise';

import './Signup.css';

class Signup extends Component {

  state = {
    signupError: null,
    loading: false
  };

  setLoading = loading => {
    this.setState({ loading })
  }

  setErrorMessage(message) {
    this.setState({ signupError: message });
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validateFields = fields => {
    if (!fields.name || !fields.email || !fields.password)
      return this.setErrorMessage('All fields are required');
    if (fields.password !== fields.confirmPassword)
      return this.setErrorMessage('Passwords doesn\'t match');
    return true;
  };

  handleSignup = async () => {
    this.setErrorMessage(null);
    const { name, email, password, confirmPassword } = this.state;
    const fields = {
      name,
      email,
      password,
      confirmPassword
    };
    if (!this.validateFields(fields)) return;
    try {
      await this.props.signupUser(fields);
      this.setState({ signupSuccess: true });
      await timerPromise(3000);
      this.setState({ redirectLogin: true });
    } catch (err) {
      this.setErrorMessage(err.message);
    }
  };

  render() {
    if (this.props.isAuth) {
      return <Redirect to="/" />;
    }
    if (this.state.redirectLogin) {
      return <Redirect to="/login" />;
    }
    const signupMessage = 'Signup Successful. You will be redirected to Login'
    return (
      <Container>
        <Card id="login-card">
          <CardImg top width="100%" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
          <CardBody>
            <CardTitle>Sign Up</CardTitle>
            <CardSubtitle>To access thousands of books around you</CardSubtitle>
            <AlertMessage
              className="mt-4"
              type="dark"
              message={this.state.signupSuccess ? signupMessage : ''}
            />
            {this.state.signupSuccess ||
              <Form id="login-form">
                <AlertMessage message={this.state.signupError} />
                <Input name="name" id="inputName" placeholder="Name" required onChange={this.handleChange} />
                <Input type="email" name="email" id="inputEmail" placeholder="Email Address" required onChange={this.handleChange} />
                <Input type="password" name="password" id="inputPassword" placeholder="Password" required onChange={this.handleChange} invalid={this.state.loginError != null} />
                <Input type="password" name="confirmPassword" id="inputConfirmPassword" placeholder="Confirm Password" required onChange={this.handleChange} invalid={this.state.loginError != null} />
                <Button color="primary" block onClick={this.handleSignup}>Sign Up</Button>
              </Form>
            }
          </CardBody>
        </Card>
      </Container>
    );
  }
}

const AlertMessage = ({ message, type, className }) => (
  message &&
  <Alert color={type ? type : 'warning'} className={className}>
    {message}
  </Alert>
);

const ConnectedComponent = connect(
  state => state.authUser,
  { signupUser }
)(Signup);

export default ConnectedComponent;
