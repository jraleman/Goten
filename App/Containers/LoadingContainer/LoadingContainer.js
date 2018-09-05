import React from 'react';
import {
  Container,
  Spinner
} from 'native-base';
import styles from './styles';

class LoadingContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
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

export default LoadingContainer;
