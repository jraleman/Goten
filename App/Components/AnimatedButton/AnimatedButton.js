import React from 'react';
import {
  Container,
  Button,
  Text
} from 'native-base';
import styles from './styles';

class AnimatedButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <Button>
          <Text>{ "Press here!" }</Text>
        </Button>
      </Container>
    );
  }
}

export default AnimatedButton;
