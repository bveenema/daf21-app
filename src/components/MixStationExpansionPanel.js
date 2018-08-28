import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// MUI Components
import Chip from '@material-ui/core/Chip'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

// App Components
import MixStationSetting from './MixStationSetting'
import ShotBox from './ShotBox'

// Styles
import styles from './MixStationExpansionPanel_Style';

function MixStationExpansionPanel(props) {
  const { classes } = props;
  return (
      <ExpansionPanel >
        <ExpansionPanelSummary className={classes.summary} expandIcon={<ExpandMoreIcon />}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={8} sm={7} className={classes.jobSite}>Barnes Airport Hanger 12</Grid>
            <Hidden xsDown><Grid item sm={3} className={classes.lastShot}><Hidden smDown>Last Shot: </Hidden>15:51 PM</Grid></Hidden>
            <Grid item xs={4} sm={2} className={classes.status}><Chip className={classes.statusChip} label="In Process" color="secondary" /></Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item xs={4} className={classes.setting}>
                <MixStationSetting label="Material" value="ShopFloor"/>
              </Grid>
              <Grid item xs={4} className={classes.setting}>
                <MixStationSetting label="Mix Output" value="2.5 Gallons" />
              </Grid>
              <Grid item xs={4} className={classes.setting}>
                <MixStationSetting label="Purge" value="5 Seconds" />
              </Grid>
            </Grid>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails className={classes.details}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={4} className={classes.setting}>
              <MixStationSetting label="Room Temp" value="70F"/>
            </Grid>
            <Grid item xs={4} className={classes.setting}>
              <MixStationSetting label="Room Humidity" value="60%" />
            </Grid>
            <Grid item xs={4} className={classes.setting}>
              <MixStationSetting label="Floor Temp" value="68F" />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails className={classes.details}>
          <Grid container direction="row" justify="space-between" alignItems="flex-end">
            <Grid item xs={6}>Output Shots</Grid>
            <Grid item xs={3}>02/19/19</Grid>
            <Grid item xs={3}><Chip className={classes.statusChip} label="Certified" color="secondary" /></Grid>
            <Grid item xs={12}>
              <FormGroup row>
                <ShotBox complete={true} time="7:22" />
                <ShotBox complete={true} time="7:27" />
                <ShotBox complete={true} time="7:33" />
                <ShotBox complete={true} time="7:38" />
                <ShotBox complete={true} time="7:41" />
                <ShotBox complete={true} time="7:45" />
                <ShotBox complete={true} time="13:49" />
                <ShotBox complete={true} time="15:51" />
                <ShotBox complete={false} />
                <ShotBox complete={false} />
                <ShotBox complete={false} />
                <ShotBox complete={false} />
              </FormGroup>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails className={classes.jobInfo}>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <Grid item xs={6}>Mix Station ID: 0121</Grid>
            <Grid item xs={3}>Job: 0121-C</Grid>
            <Grid item xs={3}>4570 sqft</Grid>
          </Grid>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Button variant="outlined" size="small">Cancel Job</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
  );
}

MixStationExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MixStationExpansionPanel);
