import axios from 'axios';

// Dispatch the color in a string, and add a '#' before it.
// This is to manage the color easier, so they are in the correct format.
// Example: '29a9d2' - > '#29a9d2'
export function loadColor () {
  return (dispatch) => {
    return (
      // Because iOS is special, I had to do this :)
      // https://stackoverflow.com/a/46254154
      axios.get('http://www.colr.org/json/color/random')
        .then((response) => {
          dispatch(changeColor('#' + response.data.new_color));
        })
        .catch((error) => {
          window.alert(error);
        })
    );
  };
};

export function changeColor (color) {
  return {
    type: 'CHANGE_COLOR',
    color: color
  };
};
