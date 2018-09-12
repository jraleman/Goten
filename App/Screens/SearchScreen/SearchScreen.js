#!/usr/bin/env node

/**
 *      |    o             |
 * ,---.|---..,---.,---. --|--- ,---.
 * ,---||   |||---'|       |    |   |
 * `---^`---'``---'`    o  `---'`---'
 *
 * SearchScreen/SearchScreen.js
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';

// ~~ Local Dependencies ~~
import styles from './styles';

const KEYS_TO_FILTERS = ['user.name', 'subject'];
const emails = [{
  id: 1,
  user: {
    name: 'Juniper',
  },
  subject: 'Hello World!',
}, {
  id: 2,
  user: {
    name: 'Robert'
  },
  subject: 'React is <3',
}, {
  id: 3,
  user: {
    name: 'you can search for me using a regex : `java$`'
  },
  subject: "What's Up?",
}
  , {
  id: 4,
  user: {
    name: 'Georgia'
  },
  subject: 'How are you today?',
}, {
  id: 5,
  user: {
    name: 'Albert'
  },
  subject: 'Hey!',
}, {
  id: 6,
  user: {
    name: 'Zoey'
  },
  subject: 'React Native!',
}, {
  id: 7,
  user: {
    name: 'Cody'
  },
  subject: 'is super!',
}, {
  id: 8,
  user: {
    name: 'Chili'
  },
  subject: 'Awesome!',
}]



/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class SearchScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        searchTerm: ''
      }
    }
    searchUpdated(term) {
      this.setState({ searchTerm: term })
    }
    render() {
      const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
      return (
        <View style={styles.container}>
          <SearchInput
            onChangeText={(term) => { this.searchUpdated(term) }}
            style={styles.searchInput}
            placeholder="Type a message to search"
            />
          <ScrollView>
            {filteredEmails.map(email => {
              return (
                <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
                  <View>
                    <Text>{email.user.name}</Text>
                    <Text style={styles.emailSubject}>{email.subject}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>
      );
  }
}

export default SearchScreen;
