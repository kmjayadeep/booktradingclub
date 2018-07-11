import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SignupForm from './SignupForm';

const styles = theme => ({
  root: {
    overflow: 'hidden'
  },
  container: {
    flexGrow: 1
  },
  card: {
    margin: 20
  }
});

class Signup extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          container
          className={classes.container}
          spacing={24}
          justify="center"
        >
          <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
            <Card>
              <CardContent>
                <Typography variant="headline" component="h2">
                  Signup
                </Typography>
                <Typography color="textSecondary">
                  to Access millions of Books
                </Typography>
                <SignupForm />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Signup);
