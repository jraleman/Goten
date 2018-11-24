#!/usr/bin/env node

// ~~ Dependencies ~~
import { StyleSheet } from 'react-native';
// ~~ Local Dependencies ~~
import { Colors } from '../../Theme';

/**
 * @type {styles}
 * @const
 */

const calendarTheme = {
  backgroundColor: Colors.background,
  calendarBackground: Colors.background,
  textSectionTitleColor: '#b6c1cd',
  selectedDayBackgroundColor: Colors.primary,
  selectedDayTextColor: '#ffffff',
  todayTextColor: Colors.primary,
  dayTextColor: '#2d4150',
  textDisabledColor: Colors.disabled,
  dotColor: Colors.primary,
  selectedDotColor: '#ffffff',
  arrowColor: Colors.primary,
  monthTextColor: Colors.text,
  // textDayFontFamily: 'monospace',
  // textMonthFontFamily: 'monospace',
  // textDayHeaderFontFamily: 'monospace',
  textMonthFontWeight: 'bold',
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16
};
const agendaTheme = {
  agendaDayTextColor: Colors.primary,
  agendaDayNumColor: Colors.primary,
  agendaTodayColor: Colors.primary,
  agendaKnobColor: Colors.primary
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

export {
  calendarTheme,
  agendaTheme
}
export default styles;
