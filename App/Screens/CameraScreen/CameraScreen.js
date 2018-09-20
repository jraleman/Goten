import React from 'react';
import { StatusBar } from 'react-native';
import styles from './styles';
import AppHeader from '../../Components/AppHeader';
// Sauce
// https://github.com/react-native-community/react-native-camera

class CameraScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <StatusBar />
        <AppHeader />
        <Content>
          <Text>{ "CameraScreen" }</Text>
        </Content>
      </Container>
    );
  }
}

export default CameraScreen;
