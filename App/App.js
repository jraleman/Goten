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

const initialStates = { counter : 0 }
const reducers = ((state = initialStates) => { return (state) });
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
