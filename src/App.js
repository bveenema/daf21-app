import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// App Components
import DAF21AppBar from './components/AppBar'
import MixStationWrapper from './MixStationWrapper'

// Data
import mixers from './dummyData'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4f4f4',
    },
    secondary: {
      main: '#00673f',
    }
  },
});

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <CssBaseline />
          <div className="App">
            <MuiThemeProvider theme={theme}>
              <DAF21AppBar />
              <div className="ContentWindow" styles={{ padding: 20}}>
                <Grid
                   container
                   direction="column"
                   justify="center"
                   alignItems="center"
                >
                  <MixStationWrapper {...mixers}/>
                </Grid>
              </div>
            </MuiThemeProvider>
          </div>
        </React.Fragment>
    );
  }
}

export default App;
