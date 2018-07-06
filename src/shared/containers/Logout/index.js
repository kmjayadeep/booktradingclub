import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { logoutUser } from '../../redux/actions/auth';

const styles = theme => ({
    root: {
        overflow: "hidden"
    },
    container: {
        flexGrow: 1
    },
    card: {
        margin: 20
    }
});

const mapStateToProps = state => {
    return {
        isAuth: state.authUser.isAuth
    }
}

class Logout extends Component {
    componentDidMount(){
        this.props.logoutUser();
    }
    render() {
        const { classes, isAuth } = this.props;
        if(!isAuth)
            return <Redirect to='/' />
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
                                    Logging out
                                </Typography>
                                <Typography color="textSecondary">
                                    Please wait...
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const ConnectedComponent = connect(mapStateToProps,{ logoutUser })(Logout);
export default withStyles(styles)(ConnectedComponent);
