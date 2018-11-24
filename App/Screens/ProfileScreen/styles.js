#!/usr/bin/env node

/**
 * ProfileScreen/styles.js
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
    backgroundColor: '#f9f9f9'
  },
  content: {
    flex: 1
  }
});

export default styles;
