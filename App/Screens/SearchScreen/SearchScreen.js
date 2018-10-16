#!/usr/bin/env node

// ~~ Dependencies ~~
import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Icon,
  Picker
} from 'native-base';
import { SearchBar } from 'react-native-elements';
// ~~ Local Dependencies ~~
import AppHeader from '../../Components/AppHeader';
import styles from './styles';

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class SearchScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: undefined
    };
    return;
  }
  onValueChange(value: string) {
    this.setState({ selected: value });
    return ;
  }
  /**
   * Renders the component.
   * @return { string } - RN markup for the component
   */
  render () {
    return (
      <React.Fragment>
      <StatusBar
        hidden={ false }
        barStyle={ 'light-content' }
        animated={ true }
      />
        <Container style={ styles.container }>
          <AppHeader
            title={ 'Search' }
            icon={ 'menu' }
            onPress={ () => this.props.navigation.openDrawer() }
          />
          <Content style={ styles.content }>
            <Form>
              <SearchBar
                lightTheme={ true }
                showLoading={ true }
                platform={ 'ios' }
                clearIcon={{ color: 'red' }}
                searchIcon={ true }
                onChangeText={ () => console.log('onChangeText') }
                onClear={ () => window.alert('Work in Progress') }
                placeholder={ 'Type Here...' }
              />
            </Form>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

export default SearchScreen;
