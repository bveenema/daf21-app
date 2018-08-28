const styles = theme => ({
  settingInput: {
    marginTop: 0,
    fontSize: '1.2em',
    [theme.breakpoints.down('xs')]:{
      fontSize: '1em'
    },
    padding: '4px 0 0'
  },
  settingLabel: {
    fontSize: '0.8em',
  }
});

export default styles;
