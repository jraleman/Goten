import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Content,
  Button,
  Icon,
  Item,
  Input,
  Form,
  Text
} from 'native-base';
import styles from './styles';
import AppHeader from '../../../Components/AppHeader';

class ForgotPassword extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  _onSubmitHandler = () => {
    window.alert('Check your email to restore your password!');
    this.props.navigation.goBack();
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <StatusBar hidden={ true } />
        <Container style={ styles.container }>
          <AppHeader
            title={ 'Forgot Password' }
            onPress={ () => this.props.navigation.goBack() }
            icon={ 'arrow-back' }
          />
          <Content padder={ true }>
            <Form style={ { flex: 1 } }>
              <Item style={ styles.email }>
                <Input placeholder={ 'Email' } />
                <Icon
                  active={ true }
                  name={ 'mail' }
                />
              </Item>
              <Button
                style={ styles.button }
                block={ true }
              >
                <Text>{ 'Submit' }</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
