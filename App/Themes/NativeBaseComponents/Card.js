import variables from './../variables';

export default (variable = variables) => {
  const cardTheme = {
    ".transparent": {
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
      elevation: null
    },
    marginVertical: 5,
    marginHorizontal: 2,
    flex: 1,
    borderWidth: variable.borderWidth,
    borderRadius: 2,
    borderColor: variable.cardBorderColor,
    flexWrap: "nowrap",
    backgroundColor: variable.cardDefaultBg,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3
  };

  return cardTheme;
};
