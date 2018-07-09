import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const styles = (theme) => ({
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

const CustomSnackbar = ({open, message, type='success',classes}) => {
  let icon = 'done';
  if(type == 'error')
    icon = 'error';
  return (
    <Snackbar open={open}>
      <SnackbarContent
        className={classes[type]}
        aria-describedby="client-snackbar"
        message={<span className={classes.message} >
          <Icon className={classes.snackbarIcon}>{icon}</Icon>
          {message}
        </span>}/>
    </Snackbar>
  );
}

export default withStyles(styles)(CustomSnackbar);