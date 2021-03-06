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
  componentDidMount () {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this._handleConnectivityChange
    );
  }
  componentWillUnmount () {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this._handleConnectivityChange
    );
  }
  _handleConnectivityChange = networkStatus => {
    if (networkStatus) {
      this.setState({ isConnected: true });
    }
    else {
      this.setState({ isConnected: false });
    }
  }
  // { /* style it for iPhone X */}
  render () {
    const message = 'No Internet Connection!';
    if (this.state.isConnected === false) {
      return (
        <React.Fragment>
          <View style={ styles.container }>
            <Text style={ styles.text }>{ message }</Text>
          </View>
        </React.Fragment>
      );
    }
    return (null);
  }
}

export default NetworkIndicator;
