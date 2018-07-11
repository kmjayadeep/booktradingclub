import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Books from './Books';

import { withStyles } from '@material-ui/core/styles';

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

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container className={classes.container} spacing={24}>
          <Grid item xs={12} className={classes.card}>
            <Card>
              <CardContent>
                <Typography variant="headline" component="h2">
                  Books
                </Typography>
                <Typography color="textSecondary">
                  Available for Trade
                </Typography>
                <Books />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
