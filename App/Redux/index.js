import {
  combineReducers,
  createStore,
} from 'redux';
import bookmarks from './Bookmarks/reducer';

const reducers = combineReducers({ bookmarks });
const store = createStore(reducers);

export default store;
