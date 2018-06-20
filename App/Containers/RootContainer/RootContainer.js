import React from 'react';
import { Container } from 'native-base';
import styles from './styles';
import AppNavigator from '../../Navigation/AppNavigator';
import NetworkIndicator from '../../Components/NetworkIndicator';

class RootContainer extends React.Component {
  render() {
    return (
      <Container style={ styles.container }>
        <NetworkIndicator />
        <AppNavigator />
      </Container>
    );
  }
}

export default RootContainer;
