import React from 'react';
import {
  Container,
  Input,
  Item,
  Label
} from 'native-base';
import styles from './styles';

class PasswordInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <Item floatingLabel={ true }>
          <Label style={ styles.label }>{ "Password" }</Label>
          <Input keyboardType={ 'default' }/>
        </Item>
      </Container>
    );
  }
}

export default PasswordInput;
