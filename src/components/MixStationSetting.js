import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// MUI Components
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
