import React, { Component } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";

const mapStateToProps = state=>{
  return {
    isAuth: state.authUser.isAuth,
    user: state.authUser.user
  }
}

const styles = {
  root: {
    height:64
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
  state={
    anchorEl:null
  }

  handleMenuOpen = event=>{
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, isAuth, user } = this.props;
    const { anchorEl } = this.state
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
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
            {!isAuth && <Button color="inherit" to="/login" component={Link}>Login</Button>}
            {!isAuth && <Button color="inherit" to="/signup" component={Link}>Signup</Button>}
            {isAuth && 
            <div>
              <Button
                color="inherit"
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={this.handleMenuOpen}
              >
                {user.name}
                <Icon>person</Icon>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleMenuClose}
              >
                <MenuItem onClick={this.handleMenuClose} to="/profile" component={Link}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose} to="/logout" component={Link}>Logout</MenuItem>
              </Menu>
             </div>
             }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


const ConnectedComponent = connect(mapStateToProps)(TopBar);
export default withStyles(styles)(ConnectedComponent);
