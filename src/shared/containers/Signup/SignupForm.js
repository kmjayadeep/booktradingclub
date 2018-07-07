import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

const styles = (theme)=>({
  signupForm: {
    marginTop: 20,
    marginBottom: 20
  },
  margin: {
    margin: theme.spacing.unit
  },
  signupButton:{
      marginTop: 30
  }
});

class SignupForm extends Component {
  state = {
    name: '',
    userName: '',
    password: '',
    confirmPassword: ''
  }
  render() {
    const { classes } = this.props;
    return <Grid container className={classes.signupForm} justify="center">
        <Grid item className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Icon>person</Icon>
            </Grid>
            <Grid item>
              <TextField label="Name" />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Icon>person</Icon>
            </Grid>
            <Grid item>
              <TextField label="Username" />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Icon>lock</Icon>
            </Grid>
            <Grid item>
              <TextField type="password" label="Password" />
            </Grid>
          </Grid> <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Icon>lock</Icon>
            </Grid>
            <Grid item>
              <TextField type="password" label="Confirm Password" />
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.signupButton} spacing={16}>
            <Button variant="outlined" color="primary">
              Signup
            </Button>
            <Button variant="outlined" to="/login" component={Link} color="secondary">
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>;
  }
}

export default withStyles(styles)(SignupForm);
