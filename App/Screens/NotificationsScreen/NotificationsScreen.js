#!/usr/bin/env node

/**
 *      |    o             |
 * ,---.|---..,---.,---. --|--- ,---.
 * ,---||   |||---'|       |    |   |
 * `---^`---'``---'`    o  `---'`---'
 *
 * NotificationsScreen/NotificationsScreen.js
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {
  Thumbnail
} from 'native-base';
// ~~ Local Dependencies ~~
import AppHeader from '../../Components/AppHeader';
import styles from './styles';

const KEYS_TO_FILTERS = ['user.name', 'user.title', 'message'];
const notifications = [
  {
    id: 0,
    user: {
      name: 'Nezu',
      title: 'Principal',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/d/db/Mr._Principal_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619050624'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 1,
    user: {
      name: 'Recovery Girl',
      title: 'Nurse',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/8/85/Chiyo_Shuzenji_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619050710'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    user: {
      name: 'All Might',
      title: 'Heroics Teacher',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/0/0a/All_Might_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619041830'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    user: {
      name: 'Eraser Head',
      title: 'Class 1-A Homeroom Teacher',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/3/32/Shota_Aizawa_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20180503194036'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 4,
    user: {
      name: 'Present Mic',
      title: 'English Teacher',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/8/89/Present_Mic_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619050949'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 5,
    user: {
      name: 'Cementoss',
      title: 'Modern Literature Teacher',
      avagar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/3/32/Cementoss_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20180627202332'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 6,
    user: {
      name: 'Ectoplasm',
      title: 'Mathematics Teacher',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7c/Ectoplasm_Anime_Portrait.png/revision/latest?cb=20170505173841'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 7,
    user: {
      name: 'Tsuyu Asui',
      title: 'Class 1-A Student',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7c/Tsuyu_Asui_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619043915'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 8,
    user: {
      name: 'Tenya Lida',
      title: 'Class 1-A Student',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7d/Tenya_Iida_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619044125'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 9,
    user: {
      name: 'Ochaco Uraraka',
      title: 'Class 1-A Student',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/78/Ochaco_Uraraka_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619044306'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 10,
    user: {
      name: 'Katsuki Bakugo',
      title: 'Class 1-A Student',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/c/cd/Katsuki_Bakugo_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619050033'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 11,
    user: {
      name: 'Izuku Midoriya',
      title: 'Class 1-A Student',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/25/Izuku_Midoriya_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619050117'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 12,
    user: {
      name: 'Shoto Todoroki',
      title: 'Class 1-A Student',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/57/Shouto_Todoroki_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619045658'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 13,
    user: {
      name: 'Fumikage Tokoyami',
      title: 'Class 1-A Student',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/6/6c/Fumikage_Tokoyami_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619045620'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 14,
    user: {
      name: 'Eijiro Kirishima',
      title: 'Class 1-A Student',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/d/d4/Eijirou_Kirishima_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619044805'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 15,
    user: {
      name: 'Denki Kaminari',
      title: 'Class 1-A Student',
      avatar: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/b/b0/Denki_Kaminari_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619044711'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class NotificationsScreen extends React.Component {
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
      const filteredNotifications = notifications.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
      return (
        <View style={ styles.container }>
          <AppHeader
            title={ 'Notifications' }
            icon={ 'menu' }
            onPress={ () => this.props.navigation.openDrawer() }
          />
          <SearchInput
            onChangeText={ (term) => { this.searchUpdated(term) }}
            style={ styles.searchInput }
            placeholder={ 'Search by name, title, message...' }
            />
          <ScrollView>
            { filteredNotifications.map(notifications => {
              return (
                <TouchableOpacity
                  onPress={ () => alert(notifications.user.name )}
                  key={ notifications.id }
                  style={ styles.notificationItem }
                >
                  <View>
                    <Text>{ notifications.user.name }</Text>
                    <Text>{ notifications.user.title }</Text>
                    <Thumbnail
                      square={ false }
                      small={ true }
                      source={{ uri: notifications.user.avatar }}
                    />
                    <Text style={ styles.notificationMessage }>
                    { notifications.message }
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>
      );
  }
}

export default NotificationsScreen;
