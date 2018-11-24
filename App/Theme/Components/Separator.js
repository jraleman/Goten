import variables from './../variables';

export default (variable = variables) => {
  const theme = {
    '.group': {
      height: 50,
      paddingVertical: variable.listItemPadding - 8,
      paddingTop: variable.listItemPadding + 12,
      '.bordered': {
        height: 50,
        paddingVertical: variable.listItemPadding - 8,
        paddingTop: variable.listItemPadding + 12
      }
    },
    '.bordered': {
      '.noTopBorder': {
        borderTopWidth: 0
      },
      '.noBottomBorder': {
        borderBottomWidth: 0
      },
      height: 35,
      paddingTop: variable.listItemPadding + 2,
      paddingBottom: variable.listItemPadding,
      borderBottomWidth: variable.borderWidth,
      borderTopWidth: variable.borderWidth,
      borderColor: variable.listBorderColor
    },
    'NativeBase.Text': {
      fontSize: variable.tabBarTextSize - 2,
      color: '#777'
    },
    '.noTopBorder': {
      borderTopWidth: 0
    },
    '.noBottomBorder': {
      borderBottomWidth: 0
    },
    height: 38,
    backgroundColor: '#F0EFF5',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: variable.listItemPadding + 5
  };

  return theme;
};
