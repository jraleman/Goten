import { Platform } from 'react-native';

import variables from './../variables';

export default (variable = variables) => {
  const platform = variable.platform;

  const footerTabTheme = {
    'NativeBase.Button': {
      '.active': {
        'NativeBase.Text': {
          color: variable.tabBarActiveTextColor,
          fontSize: variable.tabBarTextSize,
          lineHeight: 16
        },
        'NativeBase.Icon': {
          color: variable.tabBarActiveTextColor
        },
        'NativeBase.IconNB': {
          color: variable.tabBarActiveTextColor
        },
        backgroundColor: variable.tabActiveBgColor
      },
      flexDirection: null,
      backgroundColor: 'transparent',
      borderColor: null,
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      alignSelf: 'center',
      flex: 1,
      height: (variable.footerHeight - (variable.isIphoneX ? 34 : 0)),
      justifyContent: 'center',
      '.badge': {
        'NativeBase.Badge': {
          'NativeBase.Text': {
            fontSize: 11,
            fontWeight: platform === 'ios' ? '600' : undefined,
            lineHeight: 14
          },
          top: -3,
          alignSelf: 'center',
          left: 10,
          zIndex: 99,
          height: 18,
          padding: 1.7,
          paddingHorizontal: 3
        },
        'NativeBase.Icon': {
          marginTop: -18
        }
      },
      'NativeBase.Icon': {
        color: variable.tabBarTextColor
      },
      'NativeBase.IconNB': {
        color: variable.tabBarTextColor
      },
      'NativeBase.Text': {
        color: variable.tabBarTextColor,
        fontSize: variable.tabBarTextSize,
        lineHeight: 16
      }
    },
    backgroundColor: Platform.OS === 'android'
      ? variable.footerDefaultBg
      : undefined,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignSelf: 'stretch'
  };

  return footerTabTheme;
};
