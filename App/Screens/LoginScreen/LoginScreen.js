import React from 'react';
import {
  Text,
  View
} from 'react-native-animatable';
import styles from './styles';

import AnimatedTextInput from '../../Components/AnimatedTextInput';

class LoginScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
    return;
  }
  render () {
    return (
      <View style={ styles.container }>
        <View style={ styles.form }>
          <Text>{ "LoginScreen" }</Text>
          <AnimatedTextInput />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
