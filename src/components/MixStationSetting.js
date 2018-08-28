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
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

import TextField from '@material-ui/core/TextField';

// Styles
import styles from './MixStationSetting_Style';

function MixStationSetting(props) {
  const { classes } = props;
  return (
    <TextField
      label={props.label}
      value={props.value}
      fullWidth
      margin="none"
      InputProps={{
        classes: {
          input: classes.settingInput,
        },
      }}
      InputLabelProps={{
        classes: {
          root: classes.settingLabel
        }
      }}
    />
  );
}

MixStationSetting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MixStationSetting);
