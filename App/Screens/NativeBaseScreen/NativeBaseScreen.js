import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import styles from './styles';

class NativeBaseScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <Content>
        </Content>
      </Container>
    );
  }
}

export default NativeBaseScreen;
