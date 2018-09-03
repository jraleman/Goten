import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base';
import styles from './styles';
import BasicoHeader from '../../Components/BasicoHeader';

class ForgotPasswordScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <StatusBar
          translucent={ true }
          barStyle={ "light-content" }
          hidden={ true }
        />
        <Container style={ styles.container }>
          <BasicoHeader
            title={ "Forgot Password" }
            onPress={ () => this.props.navigation.goBack() }
            icon={ "arrow-back" }
          />
          <Content padder={ true }>
            <Text>{ "ForgotPasswordScreen" }</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

export default ForgotPasswordScreen;
