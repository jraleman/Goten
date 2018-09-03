import React from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';
import {
  Container,
  Content
} from 'native-base';

import BasicoHeader from '../../Components/BasicoHeader';
import styles from './styles';

class SignupScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <StatusBar
          translucent={ true }
          barStyle={ "light-content" }
          hidden={ true }
        />
        <Container style={ styles.container }>
          <BasicoHeader
            title={ "Signup" }
            onPress={ () => this.props.navigation.goBack() }
            icon={ "arrow-back" }
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default SignupScreen;
