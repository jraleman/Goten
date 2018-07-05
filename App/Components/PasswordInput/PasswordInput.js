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
          <Label style={ styles.label }>{ "Password" }</Label>
          <Input keyboardType={ 'default' }/>
          <Button
            transparent={ true }
            onPress={ this.hidePasswordHandler }
          >
            <Icon
              active={ true }
              name={ 'eye' }
              style={{color: '#384850'}}
            />
          </Button>
        </Item>
      </Container>
    );
  }
}

export default PasswordInput;
