import {
  Platform,
  StyleSheet,
  Dimensions
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
    bottom: 4
  },
  container: {
    flex: 0.42,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  drawerCover: {
    flexGrow: 1,
    alignSelf: 'stretch',
    height: deviceHeight / 3.5,
    width: null,
    position: 'relative',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerText: {
    textAlign: 'center',
    alignSelf: 'center',
    color: '#f9f9f9',
    marginTop: 12,
    fontWeight: '500'
  },
  drawer: {
    position: 'absolute',
    alignSelf: 'center',
    opacity: 0.75,
    flex: 1,
    width: '75%',
    marginTop: '2.5%',
    alignItems: 'center',
    flexDirection: 'column'
  },
  text: {
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 16,
    marginLeft: 20,
    textAlign: 'center'
  },
  badge: {
    borderRadius: 100,
    height: 30,
    width: 30,
    backgroundColor: '#33657e'
  },
  badgeText: {
    fontSize: Platform.OS === 'ios' ? 13 : 11,
    fontWeight: '400',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 6,
    marginTop: Platform.OS === 'android' ? -3 : undefined
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  wallpaper: {
    flex: 1,
    width: null,
    height: null
  },
  avatarImg: {
    backgroundColor: '#e4e4a1',
    marginTop: '7.5%',
    borderWidth: 2,
    borderColor: '#f9f9f9'

  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'center'
  }
});
