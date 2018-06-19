import React from 'react';
import { Platform } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import styles from './styles';
import CategoriesScreen from '../../Screens/CategoriesScreen';

class AppNavigator extends React.Component {
  renderScene (route, navigator) {
    return (
      <CategoriesScreen navigator={ navigator } />
    );
  }
  render () {
    return (
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
    );
  }
}

export default AppNavigator;
