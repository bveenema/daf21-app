import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Helmet} from 'react-helmet';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// App Components
import Header from './components/Header'
import MixStationWrapper from './MixStationWrapper'

// Data
import mixers from './dummyData'

// styles
import './App.css';

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
            <Helmet>
              <style>{'body, html, #root {background-color: lightgray; height:100%;}'}</style>
            </Helmet>
            <MuiThemeProvider theme={theme}>
              <Header>
                <MixStationWrapper {...mixers}/>
              </Header>
            </MuiThemeProvider>
          </div>
        </React.Fragment>
    );
  }
}

export default App;
