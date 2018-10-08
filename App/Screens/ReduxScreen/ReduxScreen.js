import React from 'react';
import { StatusBar } from 'react-native';
import {
  Button,
  Container,
  Content,
  Icon,
  Text
} from 'native-base';
import AppHeader from '../../Components/AppHeader';
import styles from './styles';

class ReduxScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    }
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <StatusBar
          hidden={ false }
          barStyle={ 'dark-content' }
          animated={ true }
        />
        <Container style={ styles.container }>
          <AppHeader
            title={ 'Redux Example' }
            icon={ 'arrow-back' }
            onPress={ () => this.props.navigation.goBack() }
          />
          <Content>
            <Button>
              <Icon active={ true } name='paw' />
              <Text>{ "Increase" }</Text>
            </Button>
            <Button>
              <Icon active={ true } name='paw' />
              <Text>{ "Decrease" }</Text>
            </Button>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

export default ReduxScreen;
