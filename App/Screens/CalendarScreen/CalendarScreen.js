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
import styles from './styles';
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
class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      selected: '2017-05-16',
      minDate: '2012-05-10',
      maxDate: '2020-05-30',
      hideKnob: false,
      refreshing: false,
      refreshControl: null,
      futureScrollRange: 20,
      pastScrollRange: 20
    }
    return ;
  };
  _loadItems = (day) => {
    setTimeout(() => {
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
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
  }
  _rowHasChanged = (r1, r2) => {
    var rowHasChanged = r1.name !== r2.name
    return (rowHasChanged);
  }
  _timeToString = (time) => {
    const date = new Date(time);
    return (date.toISOString().split('T')[0]);
  }
  _onCalendarToggled = () => {
    var action = window.alert('lol');
    return (action);
  }
  _renderAgendaComponent = () => {
    return (
      <React.Fragment>
        <Agenda
          items={ this.state.items }
          loadItemsForMonth={ this._loadItems }
          renderItem={ this._renderItem }
          renderEmptyDate={ this._renderEmptyDate }
          renderKnob={ this._renderKnob }
          rowHasChanged={ this._rowHasChanged }
          hideKnob={ this.state.hideKnob }
          refreshing={ this.state.refreshing }
          refreshControl={ this.state.refreshControl }
          futureScrollRange={ this.state.futureScrollRange }
          pastScrollRange={ this.state.pastScrollRange }
          selected={ this.state.selected }
          minDate={ this.state.minDate }
          maxDate={ this.state.maxDate }
          onCalendarToggled={ this._onCalendarToggled }
          onDayPress={ this._onCalendarToggled }
          onDayChange={ this._onCalendarToggled }
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
        <Icon
          name={ 'arrow-dropdown' }
          style={{ color: 'blue' }}
        />
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
