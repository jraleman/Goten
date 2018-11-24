#!/usr/bin/env node

/*
** App
** ---------------------------------------------------------------------------|
** Author: jraleman
** Date: Fri, Aug 31 2018
*/

// ~~ Dependencies ~~
import React from 'react';
// ~~ Local Dependencies ~~
import './Config';
import RootContainer from './Containers/RootContainer';


// -----------------

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialStates = {
  count : 0
}
const reducers = (state = initialStates, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      state = { count: state.count + 1 }
      break ;
    case 'DECREASE_COUNT':
      state = { count: state.count - 1 }
      break ;
  }
  return (state)
};
const reduxStore = createStore(reducers);

// ------------


// ~~ React Component ~~
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <Provider store={ reduxStore }>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
