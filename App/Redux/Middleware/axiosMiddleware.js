import {
  createStore,
  applyMiddleware
} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

// copy vemidoc body form here...
// see how to set up .env file, which is going to have the token, email and pass

const apiUrl = '';  // from .env file
const token = '';   // from .env file

const client = axios({
    baseUrl: apiUrl,
    responseType: 'json' // check vemidoc response type here...
});


// move this to index.js
let store = createStore(
  reducers,
  applyMiddleware(
    axiosMiddleware(client)
  )
)


/// move this to userData action files

export function loadUserData () {
  return (
    type: 'LOAD',
    payload: {
      request: {
        url: '/login'
      }
    }
  );
}
