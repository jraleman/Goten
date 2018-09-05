import React from 'react';
import {
  StatusBar
} from 'react-native';
import {
  Container,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form,
  H2,
  Text,
  ListItem,
  CheckBox,
  Radio
} from 'native-base';

import BasicoHeader from '../../Components/BasicoHeader';
import styles from './styles';

class SignupScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      termsOfServiceFlag: false,
      privatePolicyFlag: false
    };
  }
  render () {
    return (
      <React.Fragment>
        <StatusBar
          translucent
          barStyle={ 'light-content' }
          hidden
        />
        <Container style={ styles.container }>
          <BasicoHeader
            title={ 'Signup' }
            onPress={ () => this.props.navigation.goBack() }
            icon={ 'arrow-back' }
          />
          <Content padder>
            <Form>
              <H2 style={ styles.mb15 }>{ 'Sign up' }</H2>

              <ListItem
                style={ styles.radioButton }
                selected={this.state.radio1}
                onPress={ () => window.alert('UserTwo') }
              >
                <Left>
                  <Text>{ '' }</Text>
                </Left>
                <Right>
                  <Radio
                    selected={this.state.radio1}
                    onPress={ () => window.alert('UserTwo') }
                  />
                </Right>
              </ListItem>

              <Item>
                <Input placeholder={ 'Email' } />
                <Icon
                  active
                  name={ 'mail' }
                />
              </Item>

              <Item>
                <Input placeholder={ 'Password' } />
                <Icon
                  active
                  name={ 'lock' }
                />
              </Item>

              <ListItem
                style={ styles.checkbox }
                button
                onPress={ () => window.alert('ToS') }
              >
                <CheckBox
                  checked={this.state.checkbox1}
                  onPress={ () => window.alert('ToS') }
                />
                <Body>
                  <Text>{ 'I have read the terms of services' }</Text>
                </Body>
              </ListItem>

              <ListItem
                style={ styles.checkbox }
                button
                onPress={ () => window.alert('PP') }
              >
                <CheckBox
                  checked={this.state.checkbox1}
                  onPress={ () => window.alert('PP') }
                />
                <Body>
                  <Text>{ 'I accept the privacy policy' }</Text>
                </Body>
              </ListItem>

              <Button
                block
                style={{ margin: 15 }}
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

export default SignupScreen;
