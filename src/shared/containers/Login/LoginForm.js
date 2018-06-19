import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

const styles = (theme)=>({
  loginForm: {
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

class LoginForm extends Component {
  render() {
    const { classes } = this.props;
    return <Grid container className={classes.loginForm} justify="center">
        <Grid item className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Icon>person</Icon>
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Username" />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Icon>lock</Icon>
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" type="password" label="Password" />
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.signupButton} spacing={12}>
            <Button variant="outlined" color="primary">
              Login
            </Button>
            <Button variant="outlined" color="secondary">
              Signup
            </Button>
          </Grid>
        </Grid>
      </Grid>;
  }
}

export default withStyles(styles)(LoginForm);
