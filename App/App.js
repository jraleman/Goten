import React from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux';
import RootContainer from './Containers/RootContainer';
// Import config file
import './Config';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <Provider store={ store }>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
