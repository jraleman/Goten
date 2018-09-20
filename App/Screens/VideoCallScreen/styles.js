#!/usr/bin/env node

/**
 * VideoCallScreen/styles.js
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
    flex: 1
  },
  backgroundVideo: {
    flex: 1,
    backgroundColor: '#222'
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  }
});

export default styles;
