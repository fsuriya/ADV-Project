import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/sunerry1.png';
import { Link } from 'react-router-dom';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// Redux stuff
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

const styles = (theme) => ({
    ...theme
  });

class nurseryinfo extends Component{

    render(){
        return(
            <h2>hello</h2>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
  });

export default connect(
    mapStateToProps,
    { nurseryinfo }
  )(withStyles(styles)(nurseryinfo));
  