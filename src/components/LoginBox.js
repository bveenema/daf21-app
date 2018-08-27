import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import PasswordField from 'material-ui-password-field'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class LoginBox extends React.Component {
  state = {
    userName: '',
    password: '',
  };

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  checkInputs = event => {
    if(this.state.userName === "DAF21" &&
       this.state.password === "12345"){
         alert('Correct!')
         this.setState({
           userName: '',
           password: ''
         })
         this.props.onClose()
       }
    else {
      alert('Nope!')
    }
  }

  handleKeyClose = e => {
    console.log(e.keyCode)
    if(e.keyCode === 13) // enter key
      this.checkInputs();
  }

  render(){
    const { classes, open, onClose } = this.props;

    return (
      <Modal
        open={open}
        onClose={onClose}
      >
        <div style={getModalStyle()} className={classes.paper} onKeyUp={this.handleKeyClose}>
          <Grid
             container
             direction="column"
             justify="center"
             alignItems="flex-start"
          >
            <Typography variant="title" id="modal-title">
              Please Login
            </Typography>
            <FormControl
              fullWidth={true}
              margin='normal'
              className={classes.formControl}
              aria-describedby="userName-text"
            >
              <InputLabel htmlFor="user-name">User Name:</InputLabel>
              <Input autoFocus={true} id="user-name" value={this.state.userName} onChange={this.handleChange('userName')} />
              <FormHelperText id="user-name-text">Username is: DAF21</FormHelperText>
            </FormControl>
            <FormControl
              fullWidth={true}
              margin='normal'
              className={classes.formControl}
              aria-describedby="password-text">
              <InputLabel htmlFor="password">Password:</InputLabel>
              <PasswordField onChange={this.handleChange('password')}/>
              <FormHelperText id="password-text">Password is: 12345</FormHelperText>
            </FormControl>
            <Button
              style= {{ marginTop: 20 }}
              variant="contained"
              color="secondary"
              fullWidth={true}
              onClick={this.checkInputs}
            >
              Login
            </Button>
          </Grid>
        </div>
      </Modal>
    );
  }

}

LoginBox.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func
};

export default withStyles(styles)(LoginBox);
