import React from 'react';

import { StatusBar, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Icon,
  Picker
} from 'native-base';
// import { SearchBar } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

import AppHeader from '../../Components/AppHeader';
import styles from './styles';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: undefined,
      firstQuery: null
    };
    return;
  }
  onValueChange(value) {
    this.setState({ selected: value });
    return ;
  }
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
              <Searchbar
                placeholder="Search"
                onChangeText={query => { this.setState({ firstQuery: query }); }}
                value={ firstQuery }
              />
            </Form>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

export default Search;
