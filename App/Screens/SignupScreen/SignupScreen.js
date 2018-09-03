import React from 'react';
import {
  View,
  Text
} from 'react-native';
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
        <View style={ styles.container }>
          <Text>{ "SignupScreen" }</Text>
        </View>
      </React.Fragment>
    );
  }
}

export default SignupScreen;
