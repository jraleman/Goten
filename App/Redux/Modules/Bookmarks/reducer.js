// Import all the action types.
import {
  LOAD_BOOKMARKS,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  UPDATE_BOOKMARK
} from './actions';

// Define initial state (when the app gets initialzed).
const initialState = {
  bookmarks: []
};

// Reducer function, return the new state for the current action.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKMARKS:
      return ({
        ...state,
        bookmarks: [...action.payload],
      });
    // Get the payload of the action and include it in the new array.
    case ADD_BOOKMARK:
      return ({
        ...state,
        bookmarks: [
          ...state.bookmarks,
          action.payload
        ]
      });
    // Remove an item from the array via the filter method.
    case REMOVE_BOOKMARK:
      return ({
        ...state,
        bookmarks: state.bookmarks.filter(
          bookmark => bookmark.id !== action.payload.id
        )
      });
    // Find the bookmark and set the new values, using the map method.
    case UPDATE_BOOKMARK:
      return ({
        ...state,
        bookmarks: state.bookmarks.map(bookmark => {
          if (bookmark.id === action.payload.id) {
            return ({
              ...action.payload
            });
          }
          return (bookmark);
        })
      });
    default:
      return (state);
  }
};
