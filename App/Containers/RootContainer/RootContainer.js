import React from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import TestScreen from '../../Screens/TestScreen';

export default class RootContainer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <TestScreen />
      </View>
    );
  }
}
