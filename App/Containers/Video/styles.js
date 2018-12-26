import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1
  },
  backgroundVideo: {
    flex: 1,
    backgroundColor: '#222'
  },
  videoControl: {
    opacity: 0.75,
    backgroundColor: '#222',
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
