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
} from 'reactstrap';

import { signupUser } from '../../redux/actions/auth';

class Signup extends Component {

  state = {
    signupError: null,
    loading: false
  };

  setLoading = loading => {
    this.setState({loading})
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
      return this.setErrorMessage('Passwords doesnt match');
    return true;
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
            <CardTitle>Sign Up</CardTitle>
            <CardSubtitle>To access thousands of books around you</CardSubtitle>
            <Form id="login-form">
            <Input name="name" id="inputName" placeholder="Name" required onChange={this.handleChange}/>
            <Input type="email" name="email" id="inputEmail" placeholder="Email Address" required onChange={this.handleChange}/>
            <Input type="password" name="password" id="inputPassword" placeholder="Password" required onChange={this.handleChange} invalid={this.state.loginError!=null}/>
            <Input type="password" name="confirmPassword" id="inputConfirmPassword" placeholder="Confirm Password" required onChange={this.handleChange} invalid={this.state.loginError!=null}/>
            <Button color="primary" block onClick={this.handleSignup}>Sign Up</Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

const ConnectedComponent = connect(
  state => state.authUser,
  { signupUser }
)(Signup);

export default ConnectedComponent;
