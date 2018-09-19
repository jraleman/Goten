#!/usr/bin/env node

// ~~ Dependencies ~~
import React from 'react';
import {
  StatusBar
} from 'react-native';
import {
  Container,
  Content,
  View,
  Text,
  Icon
} from 'native-base';
import { Agenda } from 'react-native-calendars';
// ~~ Local Dependencies ~~
import styles, {
  calendarTheme,
  agendaTheme
} from './styles';
import AppHeader from '../../Components/AppHeader';

/*
** Use this screem as stamdard code example
** =======================================================================
*/

/*
  EventHandler calendar objects example
    {
      day: 1,     // day of month (1-31)
      month: 1,   // month of year (1-12)
      year: 2017, // year
      timestamp,   // UTC timestamp representing 00:00 AM of this date
      dateString: '2016-05-13' // date formatted as 'YYYY-MM-DD' string
    }
*/

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */

/*
** API MOCKUP DATA
*/

const selectedData = new Date()
const minDateData = '2012-05-10';
const maxDateData = '2020-05-30';
const markedDatesData = {
  '2012-05-16': {
    selected: true,
    marked: true
  },
  '2012-05-17': {
    marked: true
  },
  '2012-05-18': {
    disabled: true
  }
};

class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      selected: selectedData,
      minDate: minDateData,
      maxDate: maxDateData,
      hideKnob: false,
      refreshing: false,
      refreshControl: null,
      futureScrollRange: 20,
      pastScrollRange: 20,
      markedDates: { markedDatesData }
    }
    return ;
  };
  _generateRandomItems = (day) => {
    setTimeout(() => {
      const newItems = {};
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this._timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({ items: newItems });
    }, 1000);
    return;
  }
  _loadItems = (day) => {
    this._generateRandomItems(day);
    return ;
  }
  _rowHasChanged = (r1, r2) => {
    const rowHasChanged = r1.name !== r2.name;
    return (rowHasChanged);
  }
  _timeToString = (time) => {
    const date = new Date(time);
    const timeToString = date.toISOString().split('T')[0];
    return (timeToString);
  }
  _onCalendarToggled = () => {
    const action = window.alert(this.state.selected);
    return (action);
  }
  _onDayChange = (day) => {
    const currentDay = day.dateString;
    window.alert(JSON.stringify(currentDay));
    return (currentDay);
  }
  _onDayPress = (day) => {
    const currentDay = day.dateString;
    window.alert(JSON.stringify(currentDay));
    return (currentDay);
  }
  _onRefresh = () => {
    const action = this._timeToString;
    return (action);
  }
  _renderAgendaComponent = () => {
    return (
      <React.Fragment>
        <Agenda
          futureScrollRange={ this.state.futureScrollRange }
          hideKnob={ this.state.hideKnob }
          items={ this.state.items }
          loadItemsForMonth={ this._loadItems }
          maxDate={ this.state.maxDate }
          minDate={ this.state.minDate }
          onCalendarToggled={ this._onCalendarToggled }
          onDayChange={ this._onDayChange }
          onDayPress={ this._onDayPress }
          onRefresh={ this._onRefresh }
          pastScrollRange={ this.state.pastScrollRange }
          refreshControl={ this.state.refreshControl }
          refreshing={ this.state.refreshing }
          renderEmptyDate={ this._renderEmptyDate }
          renderItem={ this._renderItem }
          renderKnob={ this._renderKnob }
          rowHasChanged={ this._rowHasChanged }
          selected={ this.state.selected }
          markedDates={ this.state.markedDates }
          theme={{
            ...calendarTheme,
            ...agendaTheme
          }}
        />
      </React.Fragment>
    );
  }
  _renderEmptyDate = () => {
    return (
      <React.Fragment>
        <View style={ styles.emptyDate }>
          <Text>{ "This is empty date!" }</Text>
        </View>
      </React.Fragment>
    );
  }
  _renderItem = (item) => {
    return (
      <React.Fragment>
        <View style={[
          styles.item,
          { height: item.height }
        ]}>
          <Text>{ item.name }</Text>
        </View>
      </React.Fragment>
    );
  }
  _renderKnob = () => {
    return (
      <React.Fragment>
        <Icon name={ 'arrow-dropdown' } />
      </React.Fragment>
    );
  }
  render () {
    return (
      <React.Fragment>
        <StatusBar
          hidden={ false }
          barStyle={ 'light-content' }
          animated={ true }
        />
        <Container>
          <AppHeader
            title={ 'Calendar' }
            icon={ 'menu' }
            onPress={ () => { this.props.navigation.openDrawer(); }}
          />
          <this._renderAgendaComponent />
        </Container>
      </React.Fragment>
    );
  }
}

export default CalendarScreen;
