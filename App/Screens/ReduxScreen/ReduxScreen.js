import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base';
import AppHeader from '../../Components/AppHeader';
import styles from './styles';

class ReduxScreen extends React.Component {
  constructor (props) {
    super(props);
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
            <Text>{ "ReduxScreen" }</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

export default ReduxScreen;
