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
    maxWidth: 1200,
    marginTop: 20,
    paddingBottom: 0,
    backgroundColor: theme.palette.background.paper,
  },
});

function MixStationWrapper(props) {
  const { classes, ...mixers } = props;
  console.log(classes)
  console.log("mixers: ",mixers)
  let mixStations = [];
  mixers.mixer.forEach(mixer => {
    mixStations.push(<MixStationExpansionPanel {...mixer} />)
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
          {/* <MixStationExpansionPanel {...mixers.mixer[0]}/>
          <MixStationExpansionPanel />
          <MixStationExpansionPanel /> */}
        </div>
      </Grid>
    </div>
  );
}

MixStationWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MixStationWrapper);
