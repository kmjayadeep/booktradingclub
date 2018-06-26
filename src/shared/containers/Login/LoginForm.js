import React, { Component } from "react";
import {Redirect} from 'react-router';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

import { setUser } from "../../redux/actions/actions";
import { login } from "../../api/auth";

const mapStateToProps = state => {
  return {
    isAuth: state.authUser.isAuth
  };
};

const styles = theme => ({
  loginForm: {
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
  message: {
    display: "flex",
    alignItems: "center"
  },
  snackbarIcon: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  }
});

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isError: false,
      errorMessage: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidUpdate(){
    console.log(this.props.isAuth)
  }

  handleLogin() {
    const credentials = this.state;
    login(credentials)
      .then(({ token, user }) => {
        this.props.setUser(token, user);
      })
      .catch(err => {
        this.setState({
          isError: true,
          errorMessage: err.message
        });
        setTimeout(() => {
          this.setState({
            isError: false
          });
        },3000);
      });
  }
  render() {
    if (this.props.isAuth) {
      return <Redirect to='/' />;
    }
    const { classes } = this.props;
    return (
      <Grid container className={classes.loginForm} justify="center">
        <Grid item className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Icon>email</Icon>
            </Grid>
            <Grid item>
              <TextField
                required
                type="email"
                label="Email"
                error={this.state.isError}
                onChange={event => this.setState({ email: event.target.value })}
              />
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
                error={this.state.isError}
                onChange={event =>
                  this.setState({ password: event.target.value })}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            className={classes.signupButton}
            spacing={16}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleLogin}
            >
              Login
            </Button>
            <Button variant="outlined" color="secondary">
              Signup
            </Button>
          </Grid>
        </Grid>

        <Snackbar open={this.state.isError}>
          <SnackbarContent
            className={classes.error}
            aria-describedby="client-snackbar"
            message={
              <span className={classes.message}>
                <Icon className={classes.snackbarIcon}>error</Icon>
                {this.state.errorMessage}
              </span>
            }
          />
        </Snackbar>
      </Grid>
    );
  }
}

const ConnectedComponent = connect(mapStateToProps, { setUser })(LoginForm);
export default withStyles(styles)(ConnectedComponent);
