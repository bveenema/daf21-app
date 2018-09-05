import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// App Components
import MixStationExpansionPanel from './components/MixStationExpansionPanel'

const styles = theme => ({
  root: {
    width: '100%',
  },
  MixStationWrapper: {
    padding: 10,
    width: '100%',
    maxWidth: 1000,
    paddingBottom: 0,
  },
});

function MixStationWrapper(props) {
  const { classes, ...mixers } = props;
  let mixStations = [];
  mixers.mixer.forEach((mixer,i) => {
    mixStations.push(<MixStationExpansionPanel {...mixer} key={i}/>)
  })
  return (
    <div className={classes.MixStationWrapper}>
      <Grid
         container
         direction="column"
         justify="center"
         alignItems="center"
      >
        <div className={classes.root}>
          {mixStations}
        </div>
      </Grid>
    </div>
  );
}

MixStationWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MixStationWrapper);
