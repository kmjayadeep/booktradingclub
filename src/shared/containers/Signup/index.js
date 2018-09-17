import {h, Component } from 'preact';


import { signupUser } from '../../redux/actions/auth';
import timerPromise from '../../utils/timerPromise';

import styles from  '../Login/Login.css';

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
      await signupUser(fields);
      this.setState({ signupSuccess: true });
      await timerPromise(3000);
      this.setState({ redirectLogin: true });
    } catch (err) {
      this.setErrorMessage(err.message);
    }
  };

  render({},{signupError}) {
    const signupMessage = 'Signup Successful. You will be redirected to Login'
    return (
      <div class="container">
        <div class="card" id={styles.auth_card}>
          <img class="card-img-top" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
          <div class="card-body">
            <h5 class="card-title">Sign Up</h5>
            <div class="card-subtitle">To access thousands of books around you</div>
            <AlertMessage
              className="mt-4"
              type="dark"
              message={this.state.signupSuccess ? signupMessage : ''}
            />
            <form id={styles.auth_form}>
              <input class="form-control" name="name" id="inputName" placeholder="Name" required onChange={this.handleChange} />
              <input class="form-control" type="email" name="email" id="inputEmail" placeholder="Email Address" required onChange={this.handleChange} />
              <input class="form-control" type="password" name="password" id="inputPassword" placeholder="Password" required onChange={this.handleChange}/>
              <input class="form-control" type="password" name="confirmPassword" id="inputConfirmPassword" placeholder="Confirm Password" required onChange={this.handleChange} />
              <button class="btn btn-primary btn-block" onClick={this.handleSignup}>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const AlertMessage = ({ message, type, className }) => (
  message &&
  <Alert color={type ? type : 'warning'} className={className}>
    {message}
  </Alert>
);

export default Signup;
