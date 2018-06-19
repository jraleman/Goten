import React from 'react';
import {
  Navigator,
  Platform
} from 'react-native';

class AppNavigator extends React.Component {
  renderScene (route, navigator) {
    return (
      <Categories navigator={ navigator } />
    );
  }
  render () {
    <Navigator
      styles={ styles.container }
      configureScene={ (route) => {
        if (Platform.OS === 'android') {
          return (Navigator.SceneConfigs.FloatFromBottomAndroid);
        }
        else {
          return (Navigator.SceneConfigs.FloatFromBottom);
        }
      }}
      initialRoute={{}}
      renderScene={ this.renderScene }
    />
  }
}
