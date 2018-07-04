import React from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles';

class EmailInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <View style={ styles.container }>
        <Text>{ "Dummy EmailInput" }</Text>
      </View>
    );
  }
}

export default EmailInput;
