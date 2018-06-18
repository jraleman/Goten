// Import actions type.
import { LOAD_CATEGORIES_SUCCESS } from './actions';

// Empty array as the initial state.
const initialState = {
  all: []
};

// Returns the new state for the current action.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return ({
        ...state,
        all: [...action.payload.categories]
      });
    default:
      return (state);
  }
};
