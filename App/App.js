import React from 'react';
import { StatusBar } from 'react-native';
import {
  StyleProvider,
  Container
} from 'native-base';

import AppNavigation from './Navigation/AppNavigation';
import NetworkIndicator from './Components/NetworkIndicator';

import variables from './Theme/variables';
import getTheme from './Theme/Components';

import './Config';

class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <React.Fragment>
        <StyleProvider style={ getTheme(variables) }>
          <React.Fragment>
          {/* <Container style={ styles.container }> */}
          { /* <NetworkIndicator /> */}
            <StatusBar barStyle={ 'light-content' } />
            {/* Go to ./Containers/Onboard */}
            <AppNavigation />
          {/* </Container> */}
          </React.Fragment>
        </StyleProvider>
      </React.Fragment>
    );
  }
}

export default App;
