import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

// Components
import DrawerList from './DrawerList'
import LoginBox from './LoginBox'


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 500,
  }
};

class DAF21AppBar extends React.Component {
  state = {
    drawerOpen: false,
    loginOpen: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      drawerOpen: open,
    });
  };

  toggleLogin = (isOpen) => () => {
    this.setState({
      loginOpen: isOpen
    });
  };

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Mix Station Monitor
            </Typography>
            <Button color="inherit" onClick={this.toggleLogin(true)} on>Login</Button>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor='left'
          open={this.state.drawerOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <DrawerList />
          </div>
        </SwipeableDrawer>
        <LoginBox open={this.state.loginOpen}  onClose={this.toggleLogin(false)}/>
      </div>
    );
  }
}

DAF21AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DAF21AppBar);
