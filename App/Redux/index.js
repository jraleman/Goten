import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import { AsyncStorage } from 'react-native';
import {
  persistStore,
  autoRehydrate
} from 'redux-persist';

/*
** NEWSTORE
*/
import thunk from 'redux-thunk';

import fetchMiddleware from './Middleware/fetchMiddleware';

// reducers
import categories from './Modules/Categories/reducer';
import bookmarks from './Modules/Bookmarks/reducer';

/*
** NEWSTORE
*/
import colors from './Modules/Colors/reducer';

// actions
import {
  loadBookmarks,
  addBookmark,
  removeBookmark,
  updateBookmark
} from './Modules/Bookmarks/actions';
import { loadCategories } from './Modules/Categories/actions';

// Merge all the reducers into a single global object that will be saved in
// the store. This function will call each reducer with the key in the state
// that corresponds to that reduce.
const reducers = combineReducers({
  bookmarks,
  categories,
  colors
});

/*
** NEWSTORE
*/
let newStore = createStore(colors, applyMiddleware(thunk));
// let newStore = createStore(reducers, applyMiddleware(thunk));

// Object that holds the application's state tree.
// There should only be a single store in a Redux app,
// as the composition happens on the reducer level.
// autoRehydrate function load the store with the saved data on the device.
const createAppStore = applyMiddleware(fetchMiddleware)(createStore);
const store = autoRehydrate()(createAppStore)(reducers);
persistStore(store, { storage: AsyncStorage });
// const store = createStore(reducers, applyMiddleware(fetchMiddleware));

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
store.dispatch(loadCategories());

// Stop listening to changes in the state.
unsubscribe();

// export default store;

/*
** NEWSTORE
*/
export default newStore; // <- quick fix because idk which version is better...
