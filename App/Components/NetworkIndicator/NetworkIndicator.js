import React from 'react';
import {
  Dimensions,
  NetInfo,
  Text,
  View
} from 'react-native';
import styles from './styles';

class NetworkIndicator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>{ "No Internet Connection!" }</Text>
      </View>
    );
  }
}

export default NetworkIndicator;
