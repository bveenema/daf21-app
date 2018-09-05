import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// MUI Components
import Chip from '@material-ui/core/Chip'

const styles = theme => ({
  statusChip: {
    height: 28,
    [theme.breakpoints.down('xs')]: {
      height: 20
    },
  },
});


function StatusChip(props) {
  const { classes } = props;
  let style = {
    backgroundColor: "yellow",
    color: "white"
  }
  if(props.status === "In Process") style.backgroundColor = "#2196f3" // blue
  else if(props.status === "Complete") style.backgroundColor = "#43a047" // green
  else if(props.status === "Incomplete") style.backgroundColor = "#ff1744" // red
  return(
    <Chip className={classes.statusChip} label={props.status} style={style}/>
  )
}

StatusChip.propTypes = {
  classes: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired
};

export default withStyles(styles)(StatusChip);
