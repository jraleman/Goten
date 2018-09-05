import variables from './../variables';

export default (variable = variables) => {
  const platformStyle = variable.platformStyle;
  const platform = variable.platform;
  const darkCommon = {
    'NativeBase.Text': {
      color: variable.brandDark
    },
    'NativeBase.Icon': {
      color: variable.brandDark
    },
    'NativeBase.IconNB': {
      color: variable.brandDark
    }
  };
  const lightCommon = {
    'NativeBase.Text': {
      color: variable.brandLight
    },
    'NativeBase.Icon': {
      color: variable.brandLight
    },
    'NativeBase.IconNB': {
      color: variable.brandLight
    }
  };
  const primaryCommon = {
    'NativeBase.Text': {
      color: variable.btnPrimaryBg
    },
    'NativeBase.Icon': {
      color: variable.btnPrimaryBg
    },
    'NativeBase.IconNB': {
      color: variable.btnPrimaryBg
    }
  };
  const successCommon = {
    'NativeBase.Text': {
      color: variable.btnSuccessBg
    },
    'NativeBase.Icon': {
      color: variable.btnSuccessBg
    },
    'NativeBase.IconNB': {
      color: variable.btnSuccessBg
    }
  };
  const infoCommon = {
    'NativeBase.Text': {
      color: variable.btnInfoBg
    },
    'NativeBase.Icon': {
      color: variable.btnInfoBg
    },
    'NativeBase.IconNB': {
      color: variable.btnInfoBg
    }
  };
  const warningCommon = {
    'NativeBase.Text': {
      color: variable.btnWarningBg
    },
    'NativeBase.Icon': {
      color: variable.btnWarningBg
    },
    'NativeBase.IconNB': {
      color: variable.btnWarningBg
    }
  };
  const dangerCommon = {
    'NativeBase.Text': {
      color: variable.btnDangerBg
    },
    'NativeBase.Icon': {
      color: variable.btnDangerBg
    },
    'NativeBase.IconNB': {
      color: variable.btnDangerBg
    }
  };
  const buttonTheme = {
    '.disabled': {
      backgroundColor: variable.btnDisabledBg
    },
    '.bordered': {
      '.dark': {
        ...darkCommon,
        backgroundColor: 'transparent',
        borderColor: variable.brandDark,
        borderWidth: variable.borderWidth * 2
      },
      '.light': {
        ...lightCommon,
        backgroundColor: 'transparent',
        borderColor: variable.brandLight,
        borderWidth: variable.borderWidth * 2
      },
      '.primary': {
        ...primaryCommon,
        backgroundColor: 'transparent',
        borderColor: variable.btnPrimaryBg,
        borderWidth: variable.borderWidth * 2
      },
      '.success': {
        ...successCommon,
        backgroundColor: 'transparent',
        borderColor: variable.btnSuccessBg,
        borderWidth: variable.borderWidth * 2
      },
      '.info': {
        ...infoCommon,
        backgroundColor: 'transparent',
        borderColor: variable.btnInfoBg,
        borderWidth: variable.borderWidth * 2
      },
      '.warning': {
        ...warningCommon,
        backgroundColor: 'transparent',
        borderColor: variable.btnWarningBg,
        borderWidth: variable.borderWidth * 2
      },
      '.danger': {
        ...dangerCommon,
        backgroundColor: 'transparent',
        borderColor: variable.btnDangerBg,
        borderWidth: variable.borderWidth * 2
      },
      '.disabled': {
        backgroundColor: null,
        borderColor: variable.btnDisabledBg,
        borderWidth: variable.borderWidth * 2,
        'NativeBase.Text': {
          color: variable.btnDisabledBg
        }
      },
      ...primaryCommon,
      borderWidth: variable.borderWidth * 2,
      elevation: null,
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
      backgroundColor: 'transparent'
    },

    '.dark': {
      '.bordered': {
        ...darkCommon
      },
      backgroundColor: variable.brandDark
    },
    '.light': {
      '.transparent': {
        ...lightCommon,
        backgroundColor: null
      },
      '.bordered': {
        ...lightCommon
      },
      ...darkCommon,
      backgroundColor: variable.brandLight
    },

    '.primary': {
      '.bordered': {
        ...primaryCommon
      },
      backgroundColor: variable.btnPrimaryBg
    },

    '.success': {
      '.bordered': {
        ...successCommon
      },
      backgroundColor: variable.btnSuccessBg
    },

    '.info': {
      '.bordered': {
        ...infoCommon
      },
      backgroundColor: variable.btnInfoBg
    },

    '.warning': {
      '.bordered': {
        ...warningCommon
      },
      backgroundColor: variable.btnWarningBg
    },

    '.danger': {
      '.bordered': {
        ...dangerCommon
      },
      backgroundColor: variable.btnDangerBg
    },

    '.block': {
      justifyContent: 'center',
      alignSelf: 'stretch'
    },

    '.full': {
      justifyContent: 'center',
      alignSelf: 'stretch',
      borderRadius: 0
    },

    '.rounded': {
      // paddingHorizontal: variable.buttonPadding + 20,
      borderRadius: variable.borderRadiusLarge
    },

    '.transparent': {
      backgroundColor: 'transparent',
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      ...primaryCommon,
      '.dark': {
        ...darkCommon,
        backgroundColor: null
      },
      '.danger': {
        ...dangerCommon,
        backgroundColor: null
      },
      '.warning': {
        ...warningCommon,
        backgroundColor: null
      },
      '.info': {
        ...infoCommon,
        backgroundColor: null
      },
      '.primary': {
        ...primaryCommon,
        backgroundColor: null
      },
      '.success': {
        ...successCommon,
        backgroundColor: null
      },
      '.light': {
        ...lightCommon,
        backgroundColor: null
      }
    },

    '.small': {
      height: 30,
      'NativeBase.Text': {
        fontSize: 14
      }
    },

    '.large': {
      height: 60,
      'NativeBase.Text': {
        fontSize: 22,
        lineHeight: 32
      }
    },

    '.capitalize': {},

    '.vertical': {
      flexDirection: 'column',
      height: null
    },

    'NativeBase.Text': {
      fontFamily: variable.btnFontFamily,
      marginLeft: 0,
      marginRight: 0,
      color: variable.inverseTextColor,
      fontSize: variable.btnTextSize,
      lineHeight: variable.btnLineHeight,
      paddingHorizontal: 16,
      backgroundColor: 'transparent'
      // childPosition: 1
    },

    'NativeBase.Icon': {
      color: variable.inverseTextColor,
      fontSize: 24,
      marginHorizontal: 16,
      paddingTop: platform === 'ios' ? 2 : undefined
    },
    'NativeBase.IconNB': {
      color: variable.inverseTextColor,
      fontSize: 24,
      marginHorizontal: 16,
      paddingTop: platform === 'ios' ? 2 : undefined
    },

    '.iconLeft': {
      'NativeBase.Text': {
        marginLeft: 0
      },
      'NativeBase.IconNB': {
        marginRight: 0,
        marginLeft: 16
      },
      'NativeBase.Icon': {
        marginRight: 0,
        marginLeft: 16
      }
    },
    '.iconRight': {
      'NativeBase.Text': {
        marginRight: 0
      },
      'NativeBase.IconNB': {
        marginLeft: 0,
        marginRight: 16
      },
      'NativeBase.Icon': {
        marginLeft: 0,
        marginRight: 16
      }
    },
    '.picker': {
      'NativeBase.Text': {
        '.note': {
          fontSize: 16,
          lineHeight: null
        }
      }
    },

    paddingVertical: variable.buttonPadding,
    // paddingHorizontal: variable.buttonPadding + 10,
    backgroundColor: variable.btnPrimaryBg,
    borderRadius: variable.borderRadiusBase,
    borderColor: variable.btnPrimaryBg,
    borderWidth: null,
    height: 45,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    elevation: 2,
    shadowColor: platformStyle === 'material' ? variable.brandDark : undefined,
    shadowOffset:
      platformStyle === 'material' ? { width: 0, height: 2 } : undefined,
    shadowOpacity: platformStyle === 'material' ? 0.2 : undefined,
    shadowRadius: platformStyle === 'material' ? 1.2 : undefined,
    alignItems: 'center',
    justifyContent: 'space-between'
  };
  return buttonTheme;
};
