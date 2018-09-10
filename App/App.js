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

// ~~ React Component ~~
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
