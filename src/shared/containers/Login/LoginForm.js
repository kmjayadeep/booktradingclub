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

import { loginUser } from "../../redux/actions/actions";

const mapStateToProps = state => {
  return state.authUser
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
  state = {
    email: "",
    password: "",
  }
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const credentials = this.state;
    this.props.loginUser(credentials);
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
                error={this.props.loginError!=null}
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
                error={this.props.loginError!=null}
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

        <Snackbar open={this.props.loginError!=null}>
          <SnackbarContent
            className={classes.error}
            aria-describedby="client-snackbar"
            message={
              <span className={classes.message}>
                <Icon className={classes.snackbarIcon}>error</Icon>
                {this.props.loginError}
              </span>
            }
          />
        </Snackbar>
      </Grid>
    );
  }
}

const ConnectedComponent = connect(mapStateToProps, { loginUser })(LoginForm);
export default withStyles(styles)(ConnectedComponent);
