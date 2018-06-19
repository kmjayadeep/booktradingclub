import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const styles = {
  books: {
    marginTop: 10,
    marginBottom: 20
  }
};

class Books extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} className={classes.books}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Grid key={i} item xs={12} sm={6} md={4} xl={3}>
            <Card>
              <CardHeader
                title="Murder on the Orient Express"
                subheader="Agatha Christie"
              />
              <CardContent>
                <Grid container>
                  <Icon color="primary">person</Icon>
                  <Typography variant="subheading">Stephen hawking</Typography>
                </Grid>
                <Grid container>
                  <Icon color="secondary">location_on</Icon>
                  <Typography variant="body2">Kanhangad</Typography>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="outlined">
                  Request
                </Button>
                <Button size="small" variant="outlined">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(Books);
