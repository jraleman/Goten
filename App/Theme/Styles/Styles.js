import { StyleSheet } from 'react-native';
import Fonts from './Fonts'
import Measurments from './Measurments'
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
      paddingTop: Measurments.baseMargin,
      backgroundColor: Colors.defaultTextColor
    },
    section: {
      margin: Measurments.section,
      padding: Measurments.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Measurments.doubleBaseMargin,
      color: '#fff',
      marginVertical: Measurments.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: '#fff',
      padding: Measurments.smallMargin,
      marginBottom: Measurments.smallMargin,
      marginHorizontal: Measurments.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.textColor
    }
  },
  darkLabelContainer: {
    padding: Measurments.smallMargin,
    paddingBottom: Measurments.doubleBaseMargin,
    borderBottomColor: Colors.segmentBorderColor,
    borderBottomWidth: 1,
    marginBottom: Measurments.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: '#fff'
  },
  groupContainer: {
    margin: Measurments.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.textColor,
    backgroundColor: Colors.segmentActiveBackgroundColor,
    padding: Measurments.smallMargin,
    marginTop: Measurments.smallMargin,
    marginHorizontal: Measurments.baseMargin,
    borderWidth: 1,
    borderColor: Colors.segmentBorderColor,
    alignItems: 'center',
    textAlign: 'center'
  }
});

export default Styles;
