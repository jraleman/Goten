# Scarlet.Dog

## About

React Native boilerplate (or sample app), with basic redux, native-base and
login integration.

## Setup

Follow the steps from the react-native
[getting started documentation page](https://facebook.github.io/react-native/docs/getting-started.html)

Clone the repository:

```
git clone https://github.com/jraleman/scarlet.dog.git scarletdog/
cd scarletdog/
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
npm start &
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
cd android && ./gradlew installDebug
npm start &
```

<!-- **[Having issues? Click here for help!](resources/assets/md/debug-android.md)** -->

## Project Structure

The idea of having a good project structure is to have a cross platform project,
to maximize code reuse, keep the configurations out of the code, and minimize
the component state.

This is the main idea:

```
App/
├── App.js
├── Bridge/
│   └── QuickbloxBridgeView/
│       ├── index.js
│       └── QuickbloxBridgeView.js
├── Components/
│   ├── AnimatedButton/
│   │   ├── AnimatedButton.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── EmailInput/
│   │   ├── EmailInput.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── NetworkIndicator/
│   │   ├── index.js
│   │   ├── NetworkIndicator.js
│   │   └── styles.js
│   ├── PasswordInput/
│   │   ├── index.js
│   │   ├── PasswordInput.js
│   │   └── styles.js
│   └── ScarletHeader/
│       ├── index.js
│       ├── ScarletHeader.js
│       └── styles.js
├── Config/
│   ├── AppConfig.js
│   └── index.js
├── Containers/
│   ├── ColorsContainer/
│   │   ├── ColorsContainer.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── DrawerNavigationContainer/
│   │   ├── DrawerNavigationContainer.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── NativeBaseContainers/
│   │   ├── BadgesContainer.js
|   |  ...
│   │   └── styles.js
│   ├── RootContainer/
│   │   ├── index.js
│   │   ├── RootContainer.js
│   │   └── styles.js
│   └── WallpaperContainer/
│       ├── index.js
│       ├── styles.js
│       └── WallpaperContainer.js
├── I18n/
│   ├── I18n.js
│   ├── index.js
│   └── languages/
│       ├── de.json
│       ├── en.json
│       └── es.json
├── index.js
├── Navigation/
│   ├── AppNavigator/
│   │   ├── AppNavigator.js
│   │   ├── index.js
│   │   └── styles.js
│   └── DrawerNavigation/
│       ├── DrawerNavigation.js
│       └── index.js
├── Redux/
│   ├── index.js
│   ├── Middleware/
│   │   └── fetchMiddleware.js
│   └── Modules/
│       ├── Bookmarks/
│       │   ├── actions.js
│       │   └── reducer.js
│       ├── Categories/
│       │   ├── actions.js
│       │   └── reducer.js
│       └── Colors/
│           ├── actions.js
│           └── reducer.js
├── Screens/
│   ├── CategoriesScreen/
│   │   ├── CategoriesScreen.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── ColorsScreen/
│   │   ├── ColorsScreen.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── LoginScreen/
│   │   ├── index.js
│   │   ├── LoginScreen.js
│   │   └── styles.js
│   ├── NativeBaseScreen/
│   │   ├── index.js
│   │   ├── NativeBaseScreen.js
│   │   └── styles.js
│   ├── OnboardingScreen/
│   │   ├── index.js
│   │   ├── OnboardingScreen.js
│   │   └── styles.js
│   └── TestScreen/
│       ├── index.js
│       ├── styles.js
│       └── TestScreen.js
└── Themes/
    ├── Images/
    │   ├── index.js
    │   └── Source/
    │       ├── login-background.jpg
    |      ...
    │       └── slide-two.png
    ├── index.js
    ├── NativeBaseComponents/
    │   ├── Badge.js
    │  ...
    │   └── View.js
    └── variables.js
```

### Project Structure Walkthrough

This is just a basic walkthrough to the project structure, walking through the
directories in more detail.

```
...
```

Work in progress. :)

## Style Guide

### Code

We follow the [semistandard](https://github.com/Flet/semistandard) code
style guide, based from [standard](https://github.com/standard/standard).

#### Setup

To install it, run:

```
npm install semistandard -g
```

or

```
npm run lint-install
```

#### Use

To use it, just run the following command:

```
npm run lint
```

This will print out the errors and/or warnings that your code might have.

#### Log

Run the following:

```
npm run lint-log
```

If you wish to save this into a log file.

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
