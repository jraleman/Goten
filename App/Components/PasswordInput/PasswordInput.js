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
    this.state = {
      isHidden: false
    };
    return ;
  }
  hidePasswordHandler = () => {
    if (this.state.isHidden == false) {
      this.setState({ isHidden: true });
    }
    else if (this.state.isHidden == true) {
      this.setState({ isHidden: false });
    }
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
            secureTextEntry={ this.state.isHidden }
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
