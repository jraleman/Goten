import variables from './../variables';

export default (variable = variables) => {
  const platform = variable.platform;

  const tabHeadingTheme = {
    flexDirection: 'row',
    backgroundColor: variable.tabDefaultBg,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    '.scrollable': {
      paddingHorizontal: 20,
      flex: platform === 'android' ? 0 : 1,
      minWidth: platform === 'android' ? undefined : 60
    },
    'NativeBase.Text': {
      color: variable.topTabBarTextColor,
      marginHorizontal: 7
    },
    'NativeBase.Icon': {
      color: variable.topTabBarTextColor,
      fontSize: platform === 'ios' ? 26 : undefined
    },
    '.active': {
      'NativeBase.Text': {
        color: variable.topTabBarActiveTextColor,
        fontWeight: '600'
      },
      'NativeBase.Icon': {
        color: variable.topTabBarActiveTextColor
      }
    }
  };

  return tabHeadingTheme;
};
