import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';

// MUI Components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// Styles
const styles = theme => ({
  root: {
    width: 75
  },
  checked: {},
  checkBox: {
    color: yellow[600],
    '&$checked': {
      color: yellow[600],
    },
  },
  shotLabel: {
    marginLeft: -10
  }
});

function ShotBox(props) {
  const { classes } = props;
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={props.complete}
          value="checkedA"
          classes={{
            root: classes.checkBox,
            checked: classes.checked
          }}
        />
      }
      classes={{
        root: classes.root,
        label: classes.shotLabel
      }}
      label={props.time}
    />
  );
}

ShotBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShotBox);
