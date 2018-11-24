#!/usr/bin/env node

/**
 * VideoScreen/styles.js
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
    backgroundColor: '#000',
    // opacity: 0.5
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
  },
  videoControl: {
    opacity: 0.75,
    backgroundColor: '#222',
    // flex: 1,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignSelf: 'center'
  }
});

export default styles;
