#!/usr/bin/env node

/**
 * OnboardingScreen/styles.js
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import { StyleSheet } from 'react-native';
// ~~ Local Dependencies ~~
import { Colors } from '../../Themes';

/**
 * @type {styles}
 * @const
 */

const styles = StyleSheet.create({
  drawerHeaderWallpaperOverlay: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  drawerContainer: {
    bottom: 0
  },
  drawerContent: {
    backgroundColor: Colors.light,
    bottom: 4,
    flex: 1
  },
  drawerHeaderContainer: {
    alignItems: 'stretch',
    flex: 0.42,
    justifyContent: 'center'
  },
  drawerHeaderContent: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    marginTop: '2.5%',
    opacity: 0.75,
    position: 'absolute',
    width: '75%'
  },
  drawerHeaderWallpaper: {
    flex: 1,
    height: null,
    width: null
  },
  drawerHeaderAvatar: {
    backgroundColor: Colors.background,
    borderColor: Colors.light,
    borderWidth: 2,
    marginTop: '7.5%'
  },
  drawerHeaderText: {
    alignSelf: 'center',
    color: Colors.light,
    fontWeight: '500',
    marginTop: 12,
    textAlign: 'center'
  },
  drawerFooter: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-end'
  },
  drawerRow: {
    color: Colors.divisor,
    fontSize: 26,
    width: 30
  }
});

export default styles;
