import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import fetchMiddleware from './Middleware/fetchMiddleware';
import categories from './Modules/Categories/reducer';
import bookmarks from './Modules/Bookmarks/reducer';
import {
  loadBookmarks,
  addBookmark,
  removeBookmark,
  updateBookmark
} from './Modules/Bookmarks/actions';

// Merge all the reducers into a single global object that will be saved in
// the store. This function will call each reducer with the key in the state
// that corresponds to that reduce.
const reducers = combineReducers({
  bookmarks,
  categories
});

// Object that holds the application's state tree.
// There should only be a single store in a Redux app,
// as the composition happens on the reducer level.
const store = createStore(reducers, applyMiddleware(fetchMiddleware));

// Subscribe to the store. By doing this, we will listen to any change in the
// state
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions :)
store.dispatch(loadBookmarks());
store.dispatch(addBookmark({
  id: 2,
  title: 'One more',
  url: 'http://other.com'
}));
store.dispatch(updateBookmark({
  id: 2,
  title: 'One more edited',
  url: 'http://other-edit.com'
}));
store.dispatch(removeBookmark({ id: 1 }));

// Stop listening to changes in the state.
unsubscribe();

export default store;
