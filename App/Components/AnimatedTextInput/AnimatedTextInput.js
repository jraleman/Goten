import React from  'react';
import { TextInput } from 'react-native';
import { View } from 'react-native-animatable';
import styles from './styles';

class AnimatedTextInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <View style={ styles.container }>
        <TextInput />
      </View>
    );
  }
}

export default AnimatedTextInput;
