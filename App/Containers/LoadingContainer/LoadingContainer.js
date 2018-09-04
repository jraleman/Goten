import React from 'react';
import {
  Container,
  Content,
  Text,
  Spinner
} from 'native-base';
import styles from './styles';

class LoadingContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <Container style={ styles.container }>
          <Spinner color={ '#121212' }/>
        </Container>
      </React.Fragment>
    );
  }
}

export default LoadingContainer;
