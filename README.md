# Scarlet.Dog

## About

React Native boilerplate (or sample app), with basic redux, native-base and
login integration.

### Redux

![redux-graph](resources/images/redux.gif)
Source: [Bumbu's simpe-redux](https://bumbu.github.io/simple-redux/)

## Goals

- [x] Rename App `ScarletRocks` -> `ScarletDog`
- [x] Redux
  - [x] Implementation
  - [x] Redux Axios Middleware
  - [x] Redux Persist
- [x] Navigation
  - [x] StackNavigator
    - [x] Replace `Navigator` -> `StackNavigator`
  - [ ] DrawerNavigator
- [ ] Notifications
  - [x] Show network connectivity status
    - [ ] Use a [toast component](https://github.com/remobile/react-native-toast)
  - [ ] Include [push notifications](https://github.com/zo0r/react-native-push-notification)
- [ ] Screens
  - [x] Add an Onboarding screen
  - [ ] Integrate the login system
  - [ ] Profile screen
  - [x] NativeBase components screen (for themes)
- [ ] Languages
  - [x] Add i18n support
  - [ ] Integrate to multiple screens
  - [ ] English
  - [ ] Spanish
  - [ ] German
- [ ] Housekeeping
  - [ ] Styling!
  - [ ] Refactor code
  - [ ] On going app support

## Improvements

- [x] Move OnboardingScreen state.firstLaunch, outside the render function
- [ ] Change logo width depending on landscape/portrait orientation
- [ ] Fetch from API via http (not secure) in iOS

## Attribution

- [Onboarding Icons made by Freepik](http://www.freepik.com)

## Resources

- [React Native Cookbook - by Stan Bernshadskiy, Crysfel Villa](http://shop.oreilly.com/product/0636920090144.do)
- [Network Indicator](https://medium.com/dailyjs/offline-notice-in-react-native-28a8d01e8cd0)
- [Login Screen](https://github.com/dwicao/react-native-login-screen)
- [Wallpaper used for Login Screen](https://hdwallsource.com/img/2014/5/abstract-wallpaper-26633-27347-hd-wallpapers.jpg)
- [Color API Tutorial](https://www.youtube.com/watch?v=d2Mp66FFBgU)
