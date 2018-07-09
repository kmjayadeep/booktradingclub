import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import {connect} from "react-redux";
import {signupUser} from '../../redux/actions/auth';
import timerPromise from '../../utils/timerPromise';

const styles = (theme) => ({
  signupForm: {
    marginTop: 20,
    marginBottom: 20
  },
  margin: {
    margin: theme.spacing.unit
  },
  signupButton: {
    marginTop: 30
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  success: {
    backgroundColor: theme.palette.primary.dark
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  snackbarIcon: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  }
});

class SignupForm extends Component {
  state = {
    signupError: null,
    loading: false
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  validateFields = (fields) => {
    if (!fields.name || !fields.email || !fields.password) 
      return this.setErrorMessage("All fields are required");
    if (fields.password !== fields.confirmPassword) 
      return this.setErrorMessage("Passwords doesnt match");
    return true;
  }

  handleSignup = async() => {
    const {name, email, password, confirmPassword} = this.state;
    const fields = {
      name,
      email,
      password,
      confirmPassword
    };
    if (!this.validateFields(fields)) 
      return;
    try {
      await this
        .props
        .signupUser(fields);
      this.setState({signupSuccess: true})
      await timerPromise(2000);
      this.setState({redirectLogin: true})
    } catch (err) {
      this.setErrorMessage(err.message);
    }
  }

  setErrorMessage(message) {
    this.setState({signupError: message})
    setTimeout(() => {
      this.setState({signupError: null})
    }, 2000);
  }

  render() {
    if (this.props.isAuth) {
      return <Redirect to='/'/>;
    }
    if (this.state.redirectLogin) {
      return <Redirect to='/login'/>;
    }
    const {classes} = this.props;
    return (
      <Grid container className={classes.signupForm} justify="center">
        <Grid item className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Icon>person</Icon>
            </Grid>
            <Grid item>
              <TextField
                required
                label="Name"
                name="name"
                onChange={this.handleChange}
                error={this.state.signupError != null}/>
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Icon>person</Icon>
            </Grid>
            <Grid item>
              <TextField
                required
                label="Email"
                name="email"
                type="email"
                onChange={this.handleChange}
                error={this.state.signupError != null}/>
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Icon>lock</Icon>
            </Grid>
            <Grid item>
              <TextField
                required
                type="password"
                label="Password"
                name="password"
                onChange={this.handleChange}
                error={this.state.signupError != null}/>
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Icon>lock</Icon>
            </Grid>
            <Grid item>
              <TextField
                required
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                onChange={this.handleChange}
                error={this.state.signupError != null}/>
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.signupButton} spacing={16}>
            <Button variant="outlined" color="primary" onClick={this.handleSignup}>
              Signup
            </Button>
            <Button variant="outlined" to="/login" component={Link} color="secondary">
              Login
            </Button>
          </Grid>
        </Grid>

        <Snackbar open={this.state.signupError != null}>
          <SnackbarContent
            className={classes.error}
            aria-describedby="client-snackbar"
            message={< span className = {
            classes.message
          } > <Icon className={classes.snackbarIcon}>error</Icon>
            {this.state.signupError} </span>}/>
        </Snackbar>

        <Snackbar open={this.state.signupSuccess != null}>
          <SnackbarContent
            className={classes.success}
            aria-describedby="client-snackbar"
            message={< span className = {
            classes.message
          } > <Icon className={classes.snackbarIcon}>error</Icon>Signup Success !Please Login </span>}/>
        </Snackbar>

      </Grid>
    );
  }
}

const ConnectedComponent = connect(state => state.authUser, {signupUser})(SignupForm);
export default withStyles(styles)(ConnectedComponent);
