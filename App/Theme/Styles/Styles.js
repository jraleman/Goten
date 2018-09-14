import { StyleSheet } from 'react-native';
import Fonts from './Fonts'
import Measurements from './Measurements'
import Colors from './Colors'

const Styles = StyleSheet.create({
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.defaultTextColor
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Measurements.baseMargin,
      backgroundColor: Colors.defaultTextColor
    },
    section: {
      margin: Measurements.section,
      padding: Measurements.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Measurements.doubleBaseMargin,
      color: '#fff',
      marginVertical: Measurements.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: '#fff',
      padding: Measurements.smallMargin,
      marginBottom: Measurements.smallMargin,
      marginHorizontal: Measurements.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.textColor
    }
  },
  darkLabelContainer: {
    padding: Measurements.smallMargin,
    paddingBottom: Measurements.doubleBaseMargin,
    borderBottomColor: Colors.segmentBorderColor,
    borderBottomWidth: 1,
    marginBottom: Measurements.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: '#fff'
  },
  groupContainer: {
    margin: Measurements.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.textColor,
    backgroundColor: Colors.segmentActiveBackgroundColor,
    padding: Measurements.smallMargin,
    marginTop: Measurements.smallMargin,
    marginHorizontal: Measurements.baseMargin,
    borderWidth: 1,
    borderColor: Colors.segmentBorderColor,
    alignItems: 'center',
    textAlign: 'center'
  }
});

export default Styles;
