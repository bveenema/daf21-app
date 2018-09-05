import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
    color: "#2196f3",
    '&$checked': {
      color: "#2196f3",
    },
  },
  errored: {},
  error: {
    color: "#ff1744",
    '&$errored': {
      color: "#ff1744",
    },
  },
  shotLabel: {
    marginLeft: -10
  }
});

function ShotBox(props) {
  const { classes } = props;
  let checkTypeStyle = {
    root: classes.checkBox,
    checked: classes.checked
  };
  if(props.error) checkTypeStyle = {
    root: classes.error,
    checked: classes.errored,
  }
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={props.complete}
          value="checkedA"
          classes={checkTypeStyle}
          indeterminate={props.error}
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
