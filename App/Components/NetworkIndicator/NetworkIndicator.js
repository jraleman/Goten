import React from 'react';
import {
  NetInfo,
  Text,
  View
} from 'react-native';
import styles from './styles';

class NetworkIndicator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isConnected: true
    };
  }
  handleConnectivityChange = networkStatus => {
    if (networkStatus) {
      this.setState({ isConnected: true });
    }
    else {
      this.setState({ isConnected: false });
    }
  }
  componentDidMount () {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectivityChange
    );
  }
  componentWillUnmount () {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange
    );
  }
  render () {
    if (this.state.isConnected === false) {
      return (
        <View style={ styles.container }>
          <Text style={ styles.text }>{ 'No Internet Connection!' }</Text>
        </View>
      );
    }
    return (null);
  }
}

export default NetworkIndicator;
