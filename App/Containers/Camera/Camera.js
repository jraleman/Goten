import React from 'react';

import {
  Container,
  Content,
  Text
} from 'native-base';

import AppHeader from '../../Components/AppHeader';

import styles from './styles';

// Sauce
// https://github.com/react-native-community/react-native-camera

class Camera extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <React.Fragment>
        <Container style={ styles.container }>
          <AppHeader
            title={ 'Camera' }
            icon={ 'menu' }
            onPress={ () => this.props.navigation.openDrawer() }
          />
          <Content>
            <Text>{ "CameraScreen" }</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

export default Camera;
