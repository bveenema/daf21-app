import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// MUI Components
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  MixStationCard: {
    width: '100%',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    flexGrow: 1
  },
  section: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class MixStation extends React.Component {
  render(){
    const { classes } = this.props
    return(
      <Card className={classes.MixStationCard}>
        <CardContent>
          <Grid container spacing={0}>
            {/* Card Title */}
            <Grid container style={{borderBottomStyle: 'Solid', borderBottomWidth: 2}}>
              <Grid item xs={4} style={{borderRightStyle: 'Solid', borderRightWidth: 1}}>Mix Station ID: 0121</Grid>
              <Grid item xs={8}>Barnes Airport, Hanger 12</Grid>
            </Grid>

            {/* Settings and Conditions */}
            <Grid container style={{borderBottomStyle: 'Solid', borderBottomWidth: 2}}>
              <Grid item xs={10} style={{borderRightStyle: 'Solid', borderRightWidth: 1}}>
                <Grid container style={{borderBottomStyle: 'Solid', borderBottomWidth: 1}}>
                  <Grid item xs={6}>MATERIAL: Shop Floor</Grid>
                  <Grid item xs={6}>MIX OUTPUT: 2.5 Gallon</Grid>
                </Grid>
                <Grid container style={{borderBottomStyle: 'Solid', borderBottomWidth: 1}}>
                  <Grid item xs={4}>ROOM TEMP: 72F</Grid>
                  <Grid item xs={4}>ROOM HUMIDITY: 60%</Grid>
                  <Grid item xs={4}>FLOOR TEMP: 70F</Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>PURGE: 5 seconds</Grid>
                </Grid>
              </Grid>

              {/* Job Status */}
              <Grid item xs={2}>
                <Grid container>
                  <Grid item xs={12}>JOB: 0121-C</Grid>
                  <Grid item xs={12}>GOOD</Grid>
                  <Grid item xs={12}>CERTIFIED</Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Shots */}
            <Grid container style={{borderBottomStyle: 'Solid', borderBottomWidth: 2}}>
              <Grid item xs={10} style={{borderRightStyle: 'Solid', borderRightWidth: 1}}>
                <Grid container>
                  <Grid item xs={12} style={{borderBottomStyle: 'Solid', borderBottomWidth: 1}}>OUTPUT SHOTS:</Grid>
                  <Grid item xs={12}>*****************************</Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Grid container>
                  <Grid item xs={12}>02-19-19</Grid>
                  <Grid item xs={12}>CERTIFIED</Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Footer */}
            <Grid container style={{borderBottomStyle: 'Solid', borderBottomWidth: 2}}>
              <Grid item xs={10} style={{borderRightStyle: 'Solid', borderRightWidth: 1}}>TOTAL MIX RATIO OUTPUT: IN PROCESS</Grid>
              <Grid item xs={2}>4570 Sq. Ft.</Grid>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    );
  }
}

MixStation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MixStation);
