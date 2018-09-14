#!/usr/bin/env node

/**
 * NotificationsScreen/styles.js
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import { StyleSheet } from 'react-native';
// ~~ Local Dependencies ~~
import { Colors } from '../../Theme';

/**
 * @type {styles}
 * @const
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  notificationItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  notificationMessage: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
}
});

export default styles;
