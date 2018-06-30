import variables from './../variables';

export default (variable = variables) => {
	const inputTheme = {
		'.multiline': {
			height: null,
		},
		height: variable.inputHeightBase,
		color: variable.inputColor,
		paddingLeft: 5,
		paddingRight: 5,
		flex: 1,
		fontSize: variable.inputFontSize,
		lineHeight: variable.inputLineHeight,
	};

	return inputTheme;
};
