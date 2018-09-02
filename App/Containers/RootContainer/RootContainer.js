import React from 'react';
import {
  StyleProvider,
  Container
} from 'native-base';
import AppNavigation from '../../Navigation/AppNavigation';
import NetworkIndicator from '../../Components/NetworkIndicator';
import styles from './styles';
import variables from '../../Themes/variables';
import getTheme from '../../Themes/NativeBaseComponents';

class RootContainer extends React.Component {
  render() {
    return (
      <StyleProvider style={ getTheme(variables) }>
        <Container style={ styles.container }>
          <NetworkIndicator />
          <AppNavigation />
        </Container>
      </StyleProvider>
    );
  }
}

export default RootContainer;
