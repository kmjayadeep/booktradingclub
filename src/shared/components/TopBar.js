import React, { Component } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flex: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class TopBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              className={classes.menuButton}
              component={Link}
              to="/"
            >
              <HomeIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              BookSharingApp
            </Typography>
            <Button color="inherit" to="/login" component={Link}>Login</Button>
            <Button color="inherit" to="/signup" component={Link}>Signup</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(TopBar);
