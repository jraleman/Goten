import variables from './../variables';

export default (variable = variables) => {
  const platform = variable.platform;
  const transparentBtnCommon = {
    "NativeBase.Text": {
      fontSize: variable.DefaultFontSize - 4,
      color: variable.sTabBarActiveTextColor
    },
    "NativeBase.Icon": {
      fontSize: variable.iconFontSize - 10,
      color: variable.sTabBarActiveTextColor,
      marginHorizontal: null
    },
    "NativeBase.IconNB": {
      fontSize: variable.iconFontSize - 10,
      color: variable.sTabBarActiveTextColor
    },
    paddingVertical: null,
    paddingHorizontal: null
  };

  const cardItemTheme = {
    "NativeBase.Left": {
      "NativeBase.Body": {
        "NativeBase.Text": {
          ".note": {
            color: variable.listNoteColor,
            fontWeight: "400",
            marginRight: 20
          }
        },
        flex: 1,
        marginLeft: 10,
        alignItems: null
      },
      "NativeBase.Icon": {
        fontSize: variable.iconFontSize
      },
      "NativeBase.IconNB": {
        fontSize: variable.iconFontSize
      },
      "NativeBase.Text": {
        marginLeft: 10,
        alignSelf: "center"
      },
      "NativeBase.Button": {
        ".transparent": {
          ...transparentBtnCommon,
          paddingRight: variable.listItemPadding + 5
        }
      },
      flex: 1,
      flexDirection: "row",
      alignItems: "center"
    },

    ".content": {
      "NativeBase.Text": {
        color: platform === "ios" ? "#555" : "#222",
        fontSize: variable.DefaultFontSize - 3
      }
    },
    ".cardBody": {
      padding: -5,
      "NativeBase.Text": {
        marginTop: 5
      }
    },
    "NativeBase.Body": {
      "NativeBase.Text": {
        ".note": {
          color: variable.listNoteColor,
          fontWeight: "200",
          marginRight: 20
        }
      },
      "NativeBase.Button": {
        ".transparent": {
          ...transparentBtnCommon,
          paddingRight: variable.listItemPadding + 5,
          alignSelf: "stretch"
        }
      },
      flex: 1,
      alignSelf: "stretch",
      alignItems: "flex-start"
    },
    "NativeBase.Right": {
      "NativeBase.Badge": {
        alignSelf: null
      },
      "NativeBase.Button": {
        ".transparent": {
          ...transparentBtnCommon
        },
        alignSelf: null
      },
      "NativeBase.Icon": {
        alignSelf: null,
        fontSize: variable.iconFontSize - 8,
        color: variable.cardBorderColor
      },
      "NativeBase.IconNB": {
        alignSelf: null,
        fontSize: variable.iconFontSize - 8,
        color: variable.cardBorderColor
      },
      "NativeBase.Text": {
        fontSize: variable.DefaultFontSize - 2,
        alignSelf: null
      },
      "NativeBase.Thumbnail": {
        alignSelf: null
      },
      "NativeBase.Image": {
        alignSelf: null
      },
      "NativeBase.Radio": {
        alignSelf: null
      },
      "NativeBase.Checkbox": {
        alignSelf: null
      },
      "NativeBase.Switch": {
        alignSelf: null
      },
      flex: 0.8
    },
    ".header": {
      "NativeBase.Text": {
        fontSize: 16,
        fontWeight: platform === "ios" ? "600" : "500"
      },
      ".bordered": {
        "NativeBase.Text": {
          color: variable.brandPrimary,
          fontWeight: platform === "ios" ? "600" : "500"
        },
        borderBottomWidth: platform === "ios" ? variable.borderWidth : null
      },
      borderBottomWidth: null,
      paddingVertical: variable.listItemPadding + 5
    },
    ".footer": {
      "NativeBase.Text": {
        fontSize: 16,
        fontWeight: platform === "ios" ? "600" : "500"
      },
      ".bordered": {
        "NativeBase.Text": {
          color: variable.brandPrimary,
          fontWeight: platform === "ios" ? "600" : "500"
        },
        borderTopWidth: platform === "ios" ? variable.borderWidth : null
      },
      borderBottomWidth: null
    },
    "NativeBase.Text": {
      ".note": {
        color: variable.listNoteColor,
        fontWeight: "200"
      }
    },

    "NativeBase.Icon": {
      width: variable.iconFontSize + 5,
      fontSize: variable.iconFontSize - 2
    },
    "NativeBase.IconNB": {
      width: variable.iconFontSize + 5,
      fontSize: variable.iconFontSize - 2
    },

    ".bordered": {
      borderBottomWidth: variable.borderWidth,
      borderColor: variable.cardBorderColor
    },
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    padding: variable.listItemPadding + 5,
    paddingVertical: variable.listItemPadding,
    backgroundColor: variable.cardDefaultBg
  };

  return cardItemTheme;
};
