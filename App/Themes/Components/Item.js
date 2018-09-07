import { Platform } from 'react-native';

import variables from './../variables';

export default (variable = variables) => {
  const itemTheme = {
    '.floatingLabel': {
      'NativeBase.Input': {
        height: 50,
        top: 8
      },
      'NativeBase.Label': {
        top: 8
      },
      'NativeBase.Icon': {
        top: 6
      }
    },
    '.fixedLabel': {
      'NativeBase.Label': {
        position: null,
        top: null,
        left: null,
        right: null,
        flex: 1,
        height: null,
        width: null,
        fontSize: variable.inputFontSize
      },
      'NativeBase.Input': {
        flex: 2,
        fontSize: variable.inputFontSize
      }
    },
    '.stackedLabel': {
      'NativeBase.Label': {
        position: null,
        top: null,
        left: null,
        right: null,
        paddingTop: 5,
        alignSelf: 'flex-start',
        fontSize: variable.inputFontSize - 2
      },
      'NativeBase.Icon': {
        marginTop: 36
      },
      'NativeBase.Input': {
        alignSelf: Platform.OS === 'ios' ? 'stretch' : 'flex-start',
        flex: 1,
        width: Platform.OS === 'ios' ? null : variable.deviceWidth - 25,
        fontSize: variable.inputFontSize
      },
      flexDirection: null,
      height: variable.inputHeightBase + 15
    },
    '.inlineLabel': {
      'NativeBase.Label': {
        position: null,
        top: null,
        left: null,
        right: null,
        paddingRight: 20,
        height: null,
        width: null,
        fontSize: variable.inputFontSize
      },
      'NativeBase.Input': {
        paddingLeft: 5,
        fontSize: variable.inputFontSize
      },
      flexDirection: 'row'
    },
    'NativeBase.Label': {
      fontSize: variable.inputFontSize,
      color: variable.inputColorPlaceholder,
      paddingRight: 5
    },
    'NativeBase.Icon': {
      fontSize: 24,
      paddingRight: 8
    },
    'NativeBase.IconNB': {
      fontSize: 24,
      paddingRight: 8
    },
    'NativeBase.Input': {
      '.multiline': {
        height: null
      },
      height: variable.inputHeightBase,
      color: variable.inputColor,
      flex: 1,
      top: Platform.OS === 'ios' ? 1.5 : undefined,
      fontSize: variable.inputFontSize,
      lineHeight: variable.inputLineHeight
    },
    '.underline': {
      'NativeBase.Input': {
        paddingLeft: 15
      },
      '.success': {
        borderColor: variable.inputSuccessBorderColor
      },
      '.error': {
        borderColor: variable.inputErrorBorderColor
      },
      borderWidth: variable.borderWidth * 2,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderColor: variable.inputBorderColor
    },
    '.regular': {
      'NativeBase.Input': {
        paddingLeft: 8
      },
      'NativeBase.Icon': {
        paddingLeft: 10
      },
      '.success': {
        borderColor: variable.inputSuccessBorderColor
      },
      '.error': {
        borderColor: variable.inputErrorBorderColor
      },
      borderWidth: variable.borderWidth * 2,
      borderColor: variable.inputBorderColor
    },
    '.rounded': {
      'NativeBase.Input': {
        paddingLeft: 8
      },
      'NativeBase.Icon': {
        paddingLeft: 10
      },
      '.success': {
        borderColor: variable.inputSuccessBorderColor
      },
      '.error': {
        borderColor: variable.inputErrorBorderColor
      },
      borderWidth: variable.borderWidth * 2,
      borderRadius: 30,
      borderColor: variable.inputBorderColor
    },

    '.success': {
      'NativeBase.Icon': {
        color: variable.inputSuccessBorderColor
      },
      'NativeBase.IconNB': {
        color: variable.inputSuccessBorderColor
      },
      '.rounded': {
        borderRadius: 30,
        borderColor: variable.inputSuccessBorderColor
      },
      '.regular': {
        borderColor: variable.inputSuccessBorderColor
      },
      '.underline': {
        borderWidth: variable.borderWidth * 2,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: variable.inputSuccessBorderColor
      },
      borderColor: variable.inputSuccessBorderColor
    },

    '.error': {
      'NativeBase.Icon': {
        color: variable.inputErrorBorderColor
      },
      'NativeBase.IconNB': {
        color: variable.inputErrorBorderColor
      },
      '.rounded': {
        borderRadius: 30,
        borderColor: variable.inputErrorBorderColor
      },
      '.regular': {
        borderColor: variable.inputErrorBorderColor
      },
      '.underline': {
        borderWidth: variable.borderWidth * 2,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: variable.inputErrorBorderColor
      },
      borderColor: variable.inputErrorBorderColor
    },
    '.disabled': {
      'NativeBase.Icon': {
        color: '#384850'
      },
      'NativeBase.IconNB': {
        color: '#384850'
      }
    },

    borderWidth: variable.borderWidth * 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: variable.inputBorderColor,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 2
  };

  return itemTheme;
};
