const Type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic'
}

const Size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const Style = {
  h1: {
    fontFamily: Type.base,
    fontSize: Size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: Size.h2
  },
  h3: {
    fontFamily: Type.emphasis,
    fontSize: Size.h3
  },
  h4: {
    fontFamily: Type.base,
    fontSize: Size.h4
  },
  h5: {
    fontFamily: Type.base,
    fontSize: Size.h5
  },
  h6: {
    fontFamily: Type.emphasis,
    fontSize: Size.h6
  },
  normal: {
    fontFamily: Type.base,
    fontSize: Size.regular
  },
  description: {
    fontFamily: Type.base,
    fontSize: Size.medium
  }
}

const Fonts = {
  Type,
  Size,
  Style
}

export default Fonts;
