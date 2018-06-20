import React from 'react';
import { Provider } from 'react-redux';

import store from './Redux';
// import AppNavigator from './Navigation/AppNavigator';
// import NetworkIndicator from './Components/NetworkIndicator';
import RootContainer from './Containers/RootContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
