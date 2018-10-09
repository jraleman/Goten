import React from 'react';
import { StatusBar } from 'react-native';
import {
  Button,
  Container,
  Content,
  Icon,
  Text,
  Label,
  Input
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
  _increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
    return ;
  }
  _decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
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
            <Label>{ "Current counter" }</Label>
            <Input placeholder={ String(this.state.counter) } dissable={ true }/>
            <Button onPress={ this._increaseCounter }>
              <Icon active={ true } name='paw' />
              <Text>{ "Increase" }</Text>
            </Button>
            <Button onPress={ this._decreaseCounter }>
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
