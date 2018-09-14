import variables from './../variables';

export default (variable = variables) => {
  const platformStyle = variable.platformStyle;
  const platform = variable.platform;

  const iconCommon = {
    'NativeBase.Icon': {
      color: variable.tabBarActiveTextColor
    }
  };
  const iconNBCommon = {
    'NativeBase.IconNB': {
      color: variable.tabBarActiveTextColor
    }
  };
  const textCommon = {
    'NativeBase.Text': {
      color: variable.tabBarActiveTextColor
    }
  };
  const footerTheme = {
    'NativeBase.Left': {
      'NativeBase.Button': {
        '.transparent': {
          backgroundColor: 'transparent',
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null,
          ...iconCommon,
          ...iconNBCommon,
          ...textCommon
        },
        alignSelf: null,
        ...iconCommon,
        ...iconNBCommon,
        ...textCommon
      },
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-start'
    },
    'NativeBase.Body': {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      'NativeBase.Button': {
        alignSelf: 'center',
        '.transparent': {
          backgroundColor: 'transparent',
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null,
          ...iconCommon,
          ...iconNBCommon,
          ...textCommon
        },
        '.full': {
          height: variable.footerHeight,
          paddingBottom: variable.footerPaddingBottom,
          flex: 1
        },
        ...iconCommon,
        ...iconNBCommon,
        ...textCommon
      }
    },
    'NativeBase.Right': {
      'NativeBase.Button': {
        '.transparent': {
          backgroundColor: 'transparent',
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null,
          ...iconCommon,
          ...iconNBCommon,
          ...textCommon
        },
        alignSelf: null,
        ...iconCommon,
        ...iconNBCommon,
        ...textCommon
      },
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-end'
    },
    backgroundColor: variable.footerDefaultBg,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth:
      platform === 'ios' && platformStyle !== 'material'
        ? variable.borderWidth
        : undefined,
    borderColor:
      platform === 'ios' && platformStyle !== 'material'
        ? '#cbcbcb'
        : undefined,
    height: variable.footerHeight,
    paddingBottom: variable.footerPaddingBottom,
    elevation: 3,
    left: 0,
    right: 0
  };
  return footerTheme;
};
