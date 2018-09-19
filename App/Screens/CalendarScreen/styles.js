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
  backgroundColor: '#ffffff',
  calendarBackground: '#ffffff',
  textSectionTitleColor: '#b6c1cd',
  selectedDayBackgroundColor: '#338234',
  selectedDayTextColor: '#ffffff',
  todayTextColor: '#338234',
  dayTextColor: '#2d4150',
  textDisabledColor: '#d9e1e8',
  dotColor: '#338234',
  selectedDotColor: '#ffffff',
  arrowColor: 'orange',
  monthTextColor: 'blue',
  textDayFontFamily: 'monospace',
  textMonthFontFamily: 'monospace',
  textDayHeaderFontFamily: 'monospace',
  textMonthFontWeight: 'bold',
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16
};
const agendaTheme = {
  agendaDayTextColor: '#338234',
  agendaDayNumColor: '#338234',
  agendaTodayColor: '#338234',
  agendaKnobColor: '#338234'
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
