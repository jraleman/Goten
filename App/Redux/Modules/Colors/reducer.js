// Source: https://www.youtube.com/watch?v=d2Mp66FFBgU

let defaultState = {
  color: 'red'
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'CHANGE_COLOR') {
    return ({
      ...state,
      color: action.color
    });
  }
  else {
    return ({
      ...state
    });
  }
}

export default reducer;

// export default function reducer(state = initialState, action) {
//
// const initialState = {
//   color: 'red'
// };
//
// export default function reducer (state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_COLOR:
//       return ({
//         ...state,
//         color: action.color
//       });
//     default:
//       return (state);
//   }
// }
