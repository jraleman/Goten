import {
  combineReducers,
  createStore,
} from 'redux';
import bookmarks from './Modules/Bookmarks/reducer';
import {
  loadBookmarks,
  addBookmark,
  removeBookmark,
  updateBookmark
} from './Modules/Bookmarks/actions';

const reducers = combineReducers({ bookmarks });
const store = createStore(reducers);
const unsubscribe = store.subscribe(() => console.log(store.getState()));

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

unsubscribe();

export default store;
