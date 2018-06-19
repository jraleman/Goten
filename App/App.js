import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootContainer />
      </Provider>
    );
  }
}
