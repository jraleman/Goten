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

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends { React.Component }
 */
class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
    return ;
  }
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
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
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
  _renderEmptyDate = () => {
    return (
      <React.Fragment>
        <View style={ styles.emptyDate }>
          <Text>{ "This is empty date!" }</Text>
        </View>
      </React.Fragment>
    );
  }
  _rowHasChanged = (r1, r2) => {
    return (r1.name !== r2.name);
  }
  _timeToString = (time) => {
    const date = new Date(time);
    return (date.toISOString().split('T')[0]);
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
  render() {
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
            onPress={ () => this.props.navigation.openDrawer() }
          />
          <Agenda
            items={ this.state.items }
            loadItemsForMonth={ this._loadItems }
            selected={ '2017-05-16' }
            renderItem={ this._renderItem }
            renderEmptyDate={ this._renderEmptyDate }
            renderKnob={ this._renderKnob }
            rowHasChanged={ this._rowHasChanged }
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default CalendarScreen;
