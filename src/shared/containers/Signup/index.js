import {h, Component } from 'preact';
import {connect} from 'unistore/preact';
import actions from '../../store/actions/auth';
import styles from  '../Login/Login.css';
import Redirect from '../../components/Redirect';
import { route } from 'preact-router';

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
    console.log(fields)
    if (!fields.name || !fields.email || !fields.password)
      return this.setErrorMessage('All fields are required');
    if (fields.password !== fields.confirmPassword)
      return this.setErrorMessage('Passwords doesn\'t match');
    return true;
  };

  handleSignup = async (e) => {
    e.preventDefault();
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
      route('/login',true);
    } catch (err) {
      if(err && err.message)
        this.setErrorMessage(err.message);
      else
        this.setErrorMessage("Unable to sign up");
    }
  };

  render({ isAuth },{ signupError }) {
    if(isAuth)
      return <Redirect to="/login" />
    return (
      <div class="container">
        <div class="card" id={styles.auth_card}>
          <img class="card-img-top" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
          <div class="card-body">
            <h5 class="card-title">Sign Up</h5>
            <div class="card-subtitle">To access thousands of books around you</div>
            <AlertMessage
              className="mt-4"
              type="warning"
              message={signupError}
            />
            <form id={styles.auth_form}>
              <input class="form-control" name="name" id="inputName" placeholder="Name" required onChange={this.handleChange} />
              <input class="form-control" type="email" name="email" id="inputEmail" placeholder="Email Address" required onChange={this.handleChange} />
              <input class="form-control" type="password" name="password" id="inputPassword" placeholder="Password" required onChange={this.handleChange}/>
              <input class="form-control" type="password" name="confirmPassword" id="inputConfirmPassword" placeholder="Confirm Password" required onChange={this.handleChange} />
              <button class="btn btn-primary btn-block" onClick={this.handleSignup}>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const AlertMessage = ({ message, className , type}) => {
  type = type || 'warning'
  let classNames = `alert alert-${type} ${className}`;
  return (
    message &&
    <div class={classNames}>
      {message}
    </div>
  )
};

export default connect('isAuth', actions)(Signup);
