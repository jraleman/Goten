import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import styles from './styles';

class ColorsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <Content style={ styles.content } />
      </Container>
    );
  }
}

export default ColorsContainer;
