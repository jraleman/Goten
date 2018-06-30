import variables from './../variables';

export default (variable = variables) => {
  const inputGroupTheme = {
    "NativeBase.Icon": {
      fontSize: 24,
      color: variable.sTabBarActiveTextColor,
      paddingHorizontal: 5
    },
    "NativeBase.IconNB": {
      fontSize: 24,
      color: variable.sTabBarActiveTextColor,
      paddingHorizontal: 5
    },
    "NativeBase.Input": {
      height: variable.inputHeightBase,
      color: variable.inputColor,
      paddingLeft: 5,
      paddingRight: 5,
      flex: 1,
      fontSize: variable.inputFontSize,
      lineHeight: variable.inputLineHeight
    },
    ".underline": {
      ".success": {
        borderColor: variable.inputSuccessBorderColor
      },
      ".error": {
        borderColor: variable.inputErrorBorderColor
      },
      paddingLeft: 5,
      borderWidth: variable.borderWidth,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderColor: variable.inputBorderColor
    },
    ".regular": {
      ".success": {
        borderColor: variable.inputSuccessBorderColor
      },
      ".error": {
        borderColor: variable.inputErrorBorderColor
      },
      paddingLeft: 5,
      borderWidth: variable.borderWidth,
      borderColor: variable.inputBorderColor
    },
    ".rounded": {
      ".success": {
        borderColor: variable.inputSuccessBorderColor
      },
      ".error": {
        borderColor: variable.inputErrorBorderColor
      },
      paddingLeft: 5,
      borderWidth: variable.borderWidth,
      borderRadius: variable.inputGroupRoundedBorderRadius,
      borderColor: variable.inputBorderColor
    },

    ".success": {
      "NativeBase.Icon": {
        color: variable.inputSuccessBorderColor
      },
      "NativeBase.IconNB": {
        color: variable.inputSuccessBorderColor
      },
      ".rounded": {
        borderRadius: 30,
        borderColor: variable.inputSuccessBorderColor
      },
      ".regular": {
        borderColor: variable.inputSuccessBorderColor
      },
      ".underline": {
        borderWidth: variable.borderWidth,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: variable.inputSuccessBorderColor
      },
      borderColor: variable.inputSuccessBorderColor
    },

    ".error": {
      "NativeBase.Icon": {
        color: variable.inputErrorBorderColor
      },
      "NativeBase.IconNB": {
        color: variable.inputErrorBorderColor
      },
      ".rounded": {
        borderRadius: 30,
        borderColor: variable.inputErrorBorderColor
      },
      ".regular": {
        borderColor: variable.inputErrorBorderColor
      },
      ".underline": {
        borderWidth: variable.borderWidth,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: variable.inputErrorBorderColor
      },
      borderColor: variable.inputErrorBorderColor
    },
    ".disabled": {
      "NativeBase.Icon": {
        color: "#384850"
      },
      "NativeBase.IconNB": {
        color: "#384850"
      }
    },

    paddingLeft: 5,
    borderWidth: variable.borderWidth,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: variable.inputBorderColor,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  };

  return inputGroupTheme;
};
