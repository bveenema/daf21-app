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
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

// Components
import DrawerList from './DrawerList'
import LoginBox from './LoginBox'


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 500,
  },
  drawerPaper: {
    position: 'relative',
    maxWidth: 300,
  },
};

class Header extends React.Component {
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
      <div className={classes.root} style={{height:"100%"}}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Hidden mdUp>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Mix Station Monitor
            </Typography>
            <Button color="inherit" onClick={this.toggleLogin(true)}>Login</Button>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
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
          {this.props.children}
        </Hidden>
        <Hidden smDown>
          <Grid container direction="row" justify="space-between" alignItems="flex-start"  style={{height:"100%"}}>
            <Grid item md={3} style={{height:"100%"}}>
              <Drawer
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper,
                }}
                style={{height:"100%"}}
              >
                <DrawerList />
              </Drawer>
            </Grid>
            <Grid item md={9}>
              {this.props.children}
            </Grid>
          </Grid>
        </Hidden>

        <LoginBox open={this.state.loginOpen}  onClose={this.toggleLogin(false)}/>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
