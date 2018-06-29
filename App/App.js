import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux';
import RootContainer from './Containers/RootContainer';

// Thanks for the help, martinarroyo.
// Source: https://stackoverflow.com/a/40729761
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstLaunch: null
    };
  }
  componentDidMount () {
    AyncStorage.getItem('alreadyLaunched')
    .then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', true);
        this.setState({ firstLaunch: true });
      }
      else {
        this.setState({ firstLaunch: false });
        // ... you can also add your error handling code here :)
      }
    })
  }
  render() {
    return (
      <Provider store={ store }>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
