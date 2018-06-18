import React from 'react';
import { View, Text } from 'react-native';

import RootContainer from './Containers/RootContainer'
import store from './Redux';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootContainer />
      </View>
    );
  }
}
