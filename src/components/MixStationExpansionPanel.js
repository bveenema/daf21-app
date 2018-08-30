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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/Phone'

// App Components
import MixStationSetting from './MixStationSetting'
import ShotBox from './ShotBox'

// Styles
import styles from './MixStationExpansionPanel_Style';

function MixStationExpansionPanel(props) {
  const { classes, ...mixer} = props;
  console.log("mixer:",mixer);
  let lastShot = "";
  let shots = [];
  mixer.shots.statuses.forEach(status=>{
    if(status.time) lastShot = status.time
    shots.push(<ShotBox complete={status.status==="good"} time={status.time} />)
  })
  console.log(lastShot);
  return (
      <ExpansionPanel >
        <ExpansionPanelSummary className={classes.summary} expandIcon={<ExpandMoreIcon />}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={8} sm={7} className={classes.jobSite}>{mixer.job.site}</Grid>
            <Hidden xsDown><Grid item sm={3} className={classes.lastShot}><Hidden smDown>Last Shot: </Hidden>{lastShot}</Grid></Hidden>
            <Grid item xs={4} sm={2} className={classes.status}><Chip className={classes.statusChip} label={mixer.status} color="secondary" /></Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item xs={4} className={classes.setting}>
                <MixStationSetting label="Material" value={mixer.settings.material}/>
              </Grid>
              <Grid item xs={4} className={classes.setting}>
                <MixStationSetting label="Mix Output" value={mixer.settings.mixOutput} />
              </Grid>
              <Grid item xs={4} className={classes.setting}>
                <MixStationSetting label="Purge" value={mixer.settings.purge} />
              </Grid>
            </Grid>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails className={classes.details}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={4} className={classes.setting}>
              <MixStationSetting label="Room Temp" value={mixer.conditions.roomTemp}/>
            </Grid>
            <Grid item xs={4} className={classes.setting}>
              <MixStationSetting label="Room Humidity" value={mixer.conditions.humidity} />
            </Grid>
            <Grid item xs={4} className={classes.setting}>
              <MixStationSetting label="Floor Temp" value={mixer.conditions.floorTemp} />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails className={classes.details}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={6} className={classes.shotTitle}>Output Shots</Grid>
            <Grid item xs={3} className={classes.shotDate}><Hidden xsDown>Date: </Hidden>{mixer.shots.date}</Grid>
            <Grid item xs={3} className={classes.shotCertification}><Chip className={classes.statusChip} label="Certified" color="secondary" /></Grid>
            <Grid item xs={12}>
              <FormGroup row>
                {shots}
              </FormGroup>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails className={classes.jobInfo}>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <Grid item xs={6}>Mix Station ID: {mixer.id}</Grid>
            <Grid item xs={3}>Job: {mixer.job.number}</Grid>
            <Grid item xs={3}>{mixer.job.size}</Grid>
          </Grid>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Button variant="contained" size="small" className={classes.contactButton} href="tel:15553064029">Contact Crew<PhoneIcon className={classes.contactButtonIcon}/></Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
  );
}

MixStationExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MixStationExpansionPanel);
