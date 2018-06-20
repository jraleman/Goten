import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux';
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
