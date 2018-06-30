import variables from './../variables';

export default (variable = variables) => {
  const tabBarTheme = {
    ".tabIcon": {
      height: undefined
    },
    ".vertical": {
      height: 60
    },
    "NativeBase.Button": {
      ".transparent": {
        "NativeBase.Text": {
          fontSize: variable.tabFontSize,
          color: variable.sTabBarActiveTextColor,
          fontWeight: "400"
        },
        "NativeBase.IconNB": {
          color: variable.sTabBarActiveTextColor
        }
      },
      "NativeBase.IconNB": {
        color: variable.sTabBarActiveTextColor
      },
      "NativeBase.Text": {
        fontSize: variable.tabFontSize,
        color: variable.sTabBarActiveTextColor,
        fontWeight: "400"
      },
      ".isTabActive": {
        "NativeBase.Text": {
          fontWeight: "900"
        }
      },
      flex: 1,
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: null,
      borderBottomColor: "transparent",
      backgroundColor: variable.tabBgColor
    },
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: "#ccc",
    backgroundColor: variable.tabBgColor
  };

  return tabBarTheme;
};
