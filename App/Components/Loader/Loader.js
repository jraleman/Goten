import React from 'react';
import {
  Container,
  Spinner
} from 'native-base';
import styles from './styles';

class Loader extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <React.Fragment>
        <Container style={ styles.container }>
          <Spinner color={ '#121212' } />
        </Container>
      </React.Fragment>
    );
  }
}

export default Loader;
