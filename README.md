# Basico

[![js-standardx-style](https://img.shields.io/badge/code%20style-standardx-brightgreen.svg?style=flat-square)](https://github.com/standard/standardx)

## About

React Native boilerplate (or sample app), with basic redux, native-base and
login integration.

## Setup

Follow the steps from the react-native
[getting started documentation page](https://facebook.github.io/react-native/docs/getting-started.html)

Clone the repository:

```
git clone https://github.com/jraleman/Basico.git basico/
cd basico/
```

Install all the dependencies needed:

```
npm install
```

### Link

If you wish to integrate this boilerplate into your project, make sure to
link the following packages:

- `react-native-i18n`
- `react-native-push-notification`
- `react-native-vector-icons`

[Click here](https://facebook.github.io/react-native/docs/linking-libraries-ios.html) to learn more about `react-native link`.

### iOS

To run the iOS version:

```
react-native run-ios
```

You can also do it manually:

```
open ios/Basico.xcodeproj/
npm start &
```

and click the build/run icon. :)

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

## Project Structure

The idea of having a good project structure is to have a cross platform project,
to maximize code reuse, keep the configurations out of the code, and minimize
the component state.

This is the main idea:

```
...
```

### Project Structure Walkthrough

Basic walkthrough of the project structure.
Describe the functionality of each directory.

#### Components

...

#### Containers

- `App.js` ⇢ main application, where Redux store is created and configured
- `RootContainer.js` ⇢ main view, contains the status bar and navigation component

#### Config

Initialize and configure things here.

- `AppConfig.js` ⇢ simple React Native configuration here
- `ReduxPersist.js` ⇢ configures Redux Persist

#### Fixtures

Contains json files that mimic API responses for quicker development.

#### I18n

An abbreviation for the word "internationalization". The term "i18n" is derived
from its spelling as the letter "i" plus 18 letters plus the letter "n".
Languages are defined by json files under `./App/I18n/languages`.

[Click here to see more](https://github.com/AlexanderZaytsev/react-native-i18n)

#### Navigation

Primary and other navigation components reside here.

- `AppNavigation/` ⇢ loads in the initial screen and creates the
menu(s) in a StackNavigation
- `DrawerNavigation/` ⇢ ...

#### Redux

![redux-graph](resources/images/redux.gif)
Source: [Bumbu's simpe-redux](https://bumbu.github.io/simple-redux/)

#### Services

Contains the API service and other important utilities for the application.

- `Api.js` ⇢ main API service, giving an interface to communicate with the back end
- `Fixtures/` ⇢ mocks the API service (offline mode), making it faster to develop early on

#### Screens

...

#### Themes

Styling themes used throughout the app styles, acting like a *global config*
style file.

- `Images/` ⇢ app-wide styles
- `NativeBaseComponents/` ⇢
- `variables.js` ⇢ defined colors and metrics (size measurements) of the app

## Style Guide

### Code

This project follows the [standardx](https://github.com/standard/standardx
), based on [standard](https://github.com/standard/standard).

#### Rules

We follow all the rules form `standard`, minus the following exceptions:

- Every function should include one and only return statement
(exceptions allowed), including `void` types.
- ...

Check out `.eslintrc` for more info.

#### Lint

After running `npm install`, you can run the following scripts (depending on
your platform), to check if the code follows our `standardx` coding
style guide.

| Mac OS X           | Description                                            |
| :----------------- | :----------------------------------------------------- |
| `npm run lint`     | Checks `App/` code style.                              |
| `npm run lint-log` | Saves and open the log file.                           |
| `npm run lint-fix` | Fix the code style of the JavaScript files.            |

If you have any problem running the lint from the project, try installing the
following packages globally, like this:

```
npm install --global snazzy
npm install --global standardx
npm install --global babel-eslint
```

And then just run the lint from your end.
Checkout `package.json` scripts! ;)

### Colors

See `./App/Themes/variables.js`

#### Color Palette

![#e4e4a1](http://via.placeholder.com/150/e4e4a1/000000?text=e4e4a1)
![#eaeab4](http://via.placeholder.com/150/eaeab4/000000?text=eaeab4)
![#efefc8](http://via.placeholder.com/150/efefc8/000000?text=efefc8)
![#f5f5dc](http://via.placeholder.com/150/f5f5dc/000000?text=f5f5dc)
![#fbfbf0](http://via.placeholder.com/150/fbfbf0/000000?text=fbfbf0)

![#121212](http://via.placeholder.com/150/121212/ffffff?text=121212)
![#343434](http://via.placeholder.com/150/343434/ffffff?text=343434)
![#989898](http://via.placeholder.com/150/989898/ffffff?text=989898)
![#b6b6b6](http://via.placeholder.com/150/B6B6B6/000000?text=b6b6b6)
![#f9f9f9](http://via.placeholder.com/150/BBBBBB/000000?text=f9f9f9)

#### Info / Success / Warning / Error

![#457a9c](http://via.placeholder.com/150/457a9c/ffffff?text=457a9c)
![#7a9c45](http://via.placeholder.com/150/7a9c45/ffffff?text=7a9c45)
![#9c6745](http://via.placeholder.com/150/9c6745/ffffff?text=9c6745)
![#d9534f](http://via.placeholder.com/150/d9534f/ffffff?text=d9534f)

### Look & Feel

- [NativeBase](https://nativebase.io/)

#### Font

...

#### Icons

...

## Goals

  - [ ] DrawerNavigator
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

## Known Issues

- [ ] Change logo width depending on landscape/portrait orientation
- [ ] Fetch from API via http (not secure) in iOS

## Attribution

- [Onboarding Icons made by Freepik](http://www.freepik.com)

## Sauce

- [React Native Cookbook - by Stan Bernshadskiy, Crysfel Villa](http://shop.oreilly.com/product/0636920090144.do)
- [Network Indicator](https://medium.com/dailyjs/offline-notice-in-react-native-28a8d01e8cd0)
- [Color API Tutorial](https://www.youtube.com/watch?v=d2Mp66FFBgU)
- [Adding Redux to a Simple React App](https://www.youtube.com/watch?v=sX3KeP7v7Kg)
- [#1 WTF is Redux? | React Native App | The Basics](https://www.youtube.com/watch?v=KcC8KZ_Ga2M)

## Attributions

- [LIBRARY 3 AM](https://www.1001fonts.com/library-3-am-font.html)
- [loginBackground](https://flic.kr/p/25w2ewc)
- [drawerNavigationBackground](https://flic.kr/p/owtdUV)
- [drawerNavigationAvatar](https://www.iconfinder.com/icons/1509458/animal_cat_feline_halloween_kitten_icon)

## Support Us!

If you need help on how to
get started, please follow [this guideline](CONTRIBUTING.md).

#### Donate

If you like what you see, or if this project help you reduce time to develop
your own projects, feel free to buy us a pint ;)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](#)

## License

This project is under the MIT License. Meaning that you can use, copy, modify,
merge, publish, distribute, sub-license, and/or sell copies of the final
products. See the [LICENSE](LICENSE) file for more details.
