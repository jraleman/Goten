import React from 'react';
// import {
  // Platform,
  // Text,
  // View
// } from 'react-native';
import { Container } from 'native-base';
import styles from './styles';
// import TestScreen from '../../Screens/TestScreen';
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
