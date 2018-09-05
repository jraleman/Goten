import variables from './../variables';

export default (variable = variables) => {
  const textTheme = {
    fontSize: variable.DefaultFontSize - 1,
    fontFamily: variable.fontFamily,
    color: variable.textColor,
    '.note': {
      color: '#a7a7a7',
      fontSize: variable.noteFontSize
    }
  };

  return textTheme;
};
