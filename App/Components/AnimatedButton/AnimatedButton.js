import React from 'react';
import {
  ActivityIndicator,
  Text,
} from 'react-native';
import { View } from 'react-native-animatable';

class AnimatedButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <View>
        <TouchableView>
          <Text>{ "Button" }</Text>
        </TouchableView>
      </View>
    );
  }
}

export default AnimatedButton;
