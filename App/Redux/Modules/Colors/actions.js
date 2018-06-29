import axios from 'axios';

// Dispatch the color in a string, and add a '#' before it.
// This is to manage the color easier, so they are in the correct format.
// Example: '29a9d2' - > '#29a9d2'
export function loadColor () {
  return (dispatch) => {
    return (
      axios.get("http://colr.org/json/color/random")
      .then((response) => {
        dispatch(changeColor('#' + response.data.new_color));
      });
    );
  }
};

export function changeColor (color) {
  return {
    type: "CHANGE_COLOR",
    color: color
  }
};
