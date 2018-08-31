const styles = theme => ({
  summary: {
    height: 32,
    paddingLeft: 10,
    fontSize: '1.1em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8em',
    }
  },
  details: {
    borderTop: '1px solid lightgray',
    padding: 8,
    margin: '0 6px'
  },
  jobInfo: {
    fontSize: '0.7em',
    borderTop: '1px solid lightgray',
    padding: 8,
    margin: '0 6px',
  },
  jobSite: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  lastShot: {
    fontStyle: 'italic',
    color: 'grey',
  },
  shotTitle: {
    fontSize: '0.8em',
    fontWeight: 'bold'
  },
  shotDate: {
    textAlign: 'center',
    fontSize: '0.8em',
    fontStyle: 'italic'
  },
  shotCertification: {
    textAlign: 'right'
  },
  status: {
    fontStyle: 'bold',
    color: 'green'
  },
  detailSection: {
    borderTop: '1px solid lightgray',
  },
  setting: {
    padding: '4px 4px 8px',
  },
  contactButton: {
    margin: theme.spacing.unit,
  },
  contactButtonIcon: {
    marginLeft: theme.spacing.unit,
  },
  statusChip: {
    height: 28,
    [theme.breakpoints.down('xs')]: {
      height: 20
    },
    backgroundColor: "#43a047"
  },
});

export default styles;
