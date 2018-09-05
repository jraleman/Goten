import variables from './../variables';

export default (variable = variables) => {
  const subtitleTheme = {
    fontSize: variable.subTitleFontSize,
    fontFamily: variable.titleFontfamily,
    color: variable.subtitleColor,
    textAlign: 'center'
  };

  return subtitleTheme;
};
