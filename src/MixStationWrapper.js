import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// App Components
import MixStation from './components/MixStation'

const styles = theme => ({
  MixStationWrapper: {
    padding: 10,
    width: '100%',
    maxWidth: 750,
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
  },
});

class MixStationWrapper extends React.Component {
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.MixStationWrapper}>
        <Grid
           container
           direction="column"
           justify="center"
           alignItems="center"
        >
          <MixStation />
          <MixStation />
          <MixStation />
        </Grid>
      </div>
    );
  }
}

MixStationWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MixStationWrapper);
