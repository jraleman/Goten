import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import { View } from 'react-native-animatable';
import TouchableView from './TouchableView';
import styles from './styles';

class AnimatedButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <View { ...this.props }>
        <TouchableOpacity
          style={ styles.button }
        >
          <Text>{ "Button" }</Text>
        </TouchableView>
      </View>
    );
  }
}

export default AnimatedButton;
