# Scarlet.Dog

## About

React Native boilerplate (or sample app), with basic redux, native-base and
login integration.


## Setup

Follow the steps from the react-native
[getting started documentation page](https://facebook.github.io/react-native/docs/getting-started.html)

Clone the repository:

```
git clone https://github.com/jraleman/scarlet.dog.git scarletdog
cd scarletdog
```

Install all the dependencies needed:

```
npm install
```

### iOS

To run the iOS version:

```
react-native run-ios
```

You can also do it manually:

```
open ios/ScarletDog.xcodeproj/
```

and click the build/run icon. :)

<!-- **[Having issues? Click here for help!](resources/assets/md/debug-ios.md)** -->

### Android

To run the Android version:

```
react-native run-android
```

You can also run it manually:

```
npm start &
cd android && ./gradlew installDebug
```

<!-- **[Having issues? Click here for help!](resources/assets/md/debug-android.md)** -->

### Redux

![redux-graph](resources/images/redux.gif)
Source: [Bumbu's simpe-redux](https://bumbu.github.io/simple-redux/)

## Goals

- [x] Rename App `ScarletRocks` -> `ScarletDog`
- [x] Redux
  - [x] Implementation via redux-thunk
  - [x] Redux Axios Middleware
  - [x] Redux Persist
- [x] Navigation
  - [x] StackNavigator
    - [x] Replace `Navigator` -> `StackNavigator`
  - [ ] DrawerNavigator
    - [x] Navigation flow
    - [ ] Finish container (menu)
  - [ ] PathNavigator
- [ ] Notifications
  - [x] Show network connectivity status
    - [ ] Use a [toast component](https://github.com/remobile/react-native-toast)
  - [ ] Include [push notifications too](https://github.com/zo0r/react-native-push-notification)
- [ ] Screens
  - [x] Onboarding screen
  - [ ] Integrate the login system
    - [ ] Firebase demo app (test login)
    - [ ] Forgot password
    - [ ] Sign up integration
    - [ ] Data validation
  - [ ] [Profile screen](https://github.com/nattatorn-dev/react-native-user-profile)
  - [ ] Settings screen
  - [ ] Messages screen
  - [ ] Calendar screen
  - [ ] Error screen
- [ ] Languages
  - [x] Add i18n support
  - [ ] Integrate to multiple screen
  - [x] English
  - [ ] Spanish
  - [ ] German
- [ ] [Realm DB](https://www.youtube.com/watch?v=2sI64vaHF98)
- [x] Themes
  - [x] NativeBase components screen
  - [x] Integrate NB's `variables.js`
- [ ] Housekeeping
  - [ ] Styling!
  - [ ] Refactor code
  - [ ] Ongoing app support

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
