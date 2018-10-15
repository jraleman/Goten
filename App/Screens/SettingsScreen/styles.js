#!/usr/bin/env node

/**
 * SettingsScreen/styles.js
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
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
  flatList: {
    backgroundColor: '#f9f9f9'
  },
  listItem: {
    backgroundColor: '#f9f9f9'
  }
});

export default styles;
