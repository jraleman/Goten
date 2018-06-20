import React from 'react';
import {
  NetInfo,
  Text,
  View
} from 'react-native';
import styles from './styles';

// Source: https://medium.com/dailyjs/offline-notice-in-react-native-28a8d01e8cd0
class NetworkIndicator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isConnected: true
    };
    return ;
  }
  handleConnectivityChange = networkStatus => {
    if (networkStatus == true) {
      this.setState({ isConnected: true });
    }
    else {
      this.setState({ isConnected: false });
    }
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
