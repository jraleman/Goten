import React from 'react';
import {
  Button,
  Container,
  Input,
  Item,
  Icon,
  Label
} from 'native-base';
import styles from './styles';

class PasswordInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  hidePasswordHandler () {
    alert('sup!')
    return ;
  }
  render () {
    return (
      <Container style={ styles.container }>
        <Item inlineLabel={ true }>
          <Input
            keyboardType={ 'default' }
            placeholder={ "Password" }
            placeholderTextColor={ 'white' }
          />
          <Button
            transparent={ true }
            onPress={ this.hidePasswordHandler }
          >
            <Icon
              active={ true }
              name={ 'eye' }
              style={ styles.icon }
            />
          </Button>
        </Item>
      </Container>
    );
  }
}

export default PasswordInput;
