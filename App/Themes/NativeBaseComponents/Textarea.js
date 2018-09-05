import variables from './../variables';

export default (variable = variables) => {
  const textAreaTheme = {
    '.underline': {
      borderBottomWidth: variable.borderWidth,
      marginTop: 5,
      borderColor: variable.inputBorderColor
    },
    '.bordered': {
      borderWidth: 1,
      marginTop: 5,
      borderColor: variable.inputBorderColor
    },
    color: variable.textColor,
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 15,
    textAlignVertical: 'top'
  };

  return textAreaTheme;
};
