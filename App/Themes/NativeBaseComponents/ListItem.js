import { Platform, PixelRatio } from "react-native";

import pickerTheme from "./Picker";
import variables from './../variables';

export default (variable = variables) => {
  const platform = variable.platform;
  const selectedStyle = {
    "NativeBase.Text": {
      color: variable.brandPrimary
    },
    "NativeBase.Icon": {
      color: variable.brandPrimary
    }
  };

  const listItemTheme = {
    "NativeBase.InputGroup": {
      "NativeBase.Icon": {
        paddingRight: 5
      },
      "NativeBase.IconNB": {
        paddingRight: 5
      },
      "NativeBase.Input": {
        paddingHorizontal: 5
      },
      flex: 1,
      borderWidth: null,
      margin: -10,
      borderBottomColor: "transparent"
    },
    ".searchBar": {
      "NativeBase.Item": {
        "NativeBase.Icon": {
          backgroundColor: "transparent",
          color: variable.dropdownLinkColor,
          fontSize:
            platform === "ios"
              ? variable.iconFontSize - 10
              : variable.iconFontSize - 5,
          alignItems: "center",
          marginTop: 2,
          paddingRight: 8
        },
        "NativeBase.IconNB": {
          backgroundColor: "transparent",
          color: null,
          alignSelf: "center"
        },
        "NativeBase.Input": {
          alignSelf: "center"
        },
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        height: platform === "ios" ? 30 : 40,
        borderColor: "transparent",
        backgroundColor: "#fff",
        borderRadius: 5
      },
      "NativeBase.Button": {
        ".transparent": {
          "NativeBase.Text": {
            fontWeight: "500"
          },
          paddingHorizontal: null,
          paddingLeft: platform === "ios" ? 10 : null
        },
        paddingHorizontal: platform === "ios" ? undefined : null,
        width: platform === "ios" ? undefined : 0,
        height: platform === "ios" ? undefined : 0
      },
      backgroundColor: variable.toolbarInputColor,
      padding: 10,
      marginLeft: null
    },
    "NativeBase.CheckBox": {
      marginLeft: -10,
      marginRight: 10
    },
    ".first": {
      ".itemHeader": {
        paddingTop: variable.listItemPadding + 3
      }
    },
    ".itemHeader": {
      ".first": {
        paddingTop: variable.listItemPadding + 3
      },
      borderBottomWidth: platform === "ios" ? variable.borderWidth : null,
      marginLeft: null,
      padding: variable.listItemPadding,
      paddingLeft: variable.listItemPadding + 5,
      paddingTop:
        platform === "ios" ? variable.listItemPadding + 25 : undefined,
      paddingBottom:
        platform === "android" ? variable.listItemPadding + 20 : undefined,
      flexDirection: "row",
      borderColor: variable.listBorderColor,
      "NativeBase.Text": {
        fontSize: 14,
        color: platform === "ios" ? undefined : variable.listNoteColor
      }
    },
    ".itemDivider": {
      borderBottomWidth: null,
      marginLeft: null,
      padding: variable.listItemPadding,
      paddingLeft: variable.listItemPadding + 5,
      backgroundColor: variable.listDividerBg,
      flexDirection: "row",
      borderColor: variable.listBorderColor
    },
    ".selected": {
      "NativeBase.Left": {
        ...selectedStyle
      },
      "NativeBase.Body": {
        ...selectedStyle
      },
      "NativeBase.Right": {
        ...selectedStyle
      },
      ...selectedStyle
    },
    "NativeBase.Left": {
      "NativeBase.Body": {
        "NativeBase.Text": {
          ".note": {
            color: variable.listNoteColor,
            fontWeight: "200"
          },
          fontWeight: "600"
        },
        marginLeft: 10,
        alignItems: null,
        alignSelf: null
      },
      "NativeBase.Icon": {
        width: variable.iconFontSize - 10,
        fontSize: variable.iconFontSize - 10
      },
      "NativeBase.IconNB": {
        width: variable.iconFontSize - 10,
        fontSize: variable.iconFontSize - 10
      },
      "NativeBase.Text": {
        alignSelf: "center"
      },
      flexDirection: "row"
    },
    "NativeBase.Body": {
      "NativeBase.Text": {
        marginHorizontal: variable.listItemPadding,
        ".note": {
          color: variable.listNoteColor,
          fontWeight: "200"
        }
      },
      alignSelf: null,
      alignItems: null
    },
    "NativeBase.Right": {
      "NativeBase.Badge": {
        alignSelf: null
      },
      "NativeBase.PickerNB": {
        "NativeBase.Button": {
          marginRight: -15,
          "NativeBase.Text": {
            color: variable.topTabBarActiveTextColor
          }
        }
      },
      "NativeBase.Button": {
        alignSelf: null,
        ".transparent": {
          "NativeBase.Text": {
            color: variable.topTabBarActiveTextColor
          }
        }
      },
      "NativeBase.Icon": {
        alignSelf: null,
        fontSize: variable.iconFontSize - 8,
        color: "#c9c8cd"
      },
      "NativeBase.IconNB": {
        alignSelf: null,
        fontSize: variable.iconFontSize - 8,
        color: "#c9c8cd"
      },
      "NativeBase.Text": {
        ".note": {
          color: variable.listNoteColor,
          fontWeight: "200"
        },
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
      padding: null,
      flex: 0.28
    },
    "NativeBase.Text": {
      ".note": {
        color: variable.listNoteColor,
        fontWeight: "200"
      },
      alignSelf: "center"
    },

    ".last": {
      marginLeft: -(variable.listItemPadding + 5),
      paddingLeft: (variable.listItemPadding + 5) * 2,
      top: 1
    },

    ".avatar": {
      "NativeBase.Left": {
        flex: 0
      },
      "NativeBase.Body": {
        "NativeBase.Text": {
          marginLeft: null
        },
        flex: 1,
        paddingVertical: variable.listItemPadding,
        borderBottomWidth: variable.borderWidth,
        borderColor: variable.listBorderColor,
        marginLeft: variable.listItemPadding + 5
      },
      "NativeBase.Right": {
        "NativeBase.Text": {
          ".note": {
            fontSize: variable.noteFontSize - 2
          }
        },
        flex: 0,
        paddingRight: variable.listItemPadding + 5,
        alignSelf: "stretch",
        paddingVertical: variable.listItemPadding,
        borderBottomWidth: variable.borderWidth,
        borderColor: variable.listBorderColor
      },
      borderBottomWidth: null,
      paddingVertical: null,
      paddingRight: null
    },

    ".thumbnail": {
      "NativeBase.Left": {
        flex: 0
      },
      "NativeBase.Body": {
        "NativeBase.Text": {
          marginLeft: null
        },
        flex: 1,
        paddingVertical: variable.listItemPadding + 5,
        borderBottomWidth: variable.borderWidth,
        borderColor: variable.listBorderColor,
        marginLeft: variable.listItemPadding + 5
      },
      "NativeBase.Right": {
        "NativeBase.Button": {
          ".transparent": {
            "NativeBase.Text": {
              fontSize: variable.listNoteSize,
              color: variable.sTabBarActiveTextColor
            }
          },
          height: null
        },
        flex: 0,
        justifyContent: "center",
        alignSelf: "stretch",
        paddingRight: variable.listItemPadding + 5,
        paddingVertical: variable.listItemPadding + 5,
        borderBottomWidth: variable.borderWidth,
        borderColor: variable.listBorderColor
      },
      borderBottomWidth: null,
      paddingVertical: null,
      paddingRight: null
    },

    ".icon": {
      ".last": {
        "NativeBase.Body": {
          borderBottomWidth: null
        },
        "NativeBase.Right": {
          borderBottomWidth: null
        },
        borderBottomWidth: variable.borderWidth,
        borderColor: variable.listBorderColor
      },
      "NativeBase.Left": {
        "NativeBase.Button": {
          "NativeBase.IconNB": {
            marginHorizontal: null,
            fontSize: variable.iconFontSize - 5
          },
          "NativeBase.Icon": {
            marginHorizontal: null,
            fontSize: variable.iconFontSize - 8
          },
          alignSelf: "center",
          height: 29,
          width: 29,
          borderRadius: 6,
          paddingVertical: null,
          paddingHorizontal: null,
          alignItems: "center",
          justifyContent: "center"
        },
        "NativeBase.Icon": {
          width: variable.iconFontSize - 5,
          fontSize: variable.iconFontSize - 2
        },
        "NativeBase.IconNB": {
          width: variable.iconFontSize - 5,
          fontSize: variable.iconFontSize - 2
        },
        paddingRight: variable.listItemPadding + 5,
        flex: 0,
        height: 44,
        justifyContent: "center",
        alignItems: "center"
      },
      "NativeBase.Body": {
        "NativeBase.Text": {
          marginLeft: null,
          fontSize: 17
        },
        flex: 1,
        height: 44,
        justifyContent: "center",
        borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        borderColor: variable.listBorderColor
      },
      "NativeBase.Right": {
        "NativeBase.Text": {
          textAlign: "center",
          color: "#8F8E95",
          fontSize: 17
        },
        "NativeBase.IconNB": {
          color: "#C8C7CC",
          fontSize: variable.iconFontSize - 10,
          alignSelf: "center",
          paddingLeft: 10,
          paddingTop: 3
        },
        "NativeBase.Icon": {
          color: "#C8C7CC",
          fontSize: variable.iconFontSize - 10,
          alignSelf: "center",
          paddingLeft: 10,
          paddingTop: 3
        },
        "NativeBase.Switch": {
          marginRight: Platform.OS === "ios" ? undefined : -5,
          alignSelf: null
        },
        "NativeBase.PickerNB": {
          ...pickerTheme()
        },
        flexDirection: "row",
        alignItems: "center",
        flex: 0,
        alignSelf: "stretch",
        height: 44,
        justifyContent: "flex-end",
        borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        borderColor: variable.listBorderColor,
        paddingRight: variable.listItemPadding + 5
      },
      borderBottomWidth: null,
      paddingVertical: null,
      paddingRight: null,
      height: 44,
      justifyContent: "center"
    },
    ".noBorder": {
      borderBottomWidth: null
    },
    alignItems: "center",
    flexDirection: "row",
    paddingRight: variable.listItemPadding + 6,
    paddingVertical: variable.listItemPadding + 3,
    marginLeft: variable.listItemPadding + 6,
    borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    backgroundColor: variable.listBg,
    borderColor: variable.listBorderColor
  };

  return listItemTheme;
};
