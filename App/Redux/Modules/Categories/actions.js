// Define actions name.
export const LOAD_CATEGORIES = 'categ/LOAD_CATEGORIES';
export const LOAD_CATEGORIES_SUCCESS = 'categ/LOAD_CATEGORIES_S';
export const LOAD_CATEGORIES_FAIL = 'categ/LOAD_CATEGORIES_F';

// Create action creations...
// Payloads of information that send data from your application to your store.
export function loadCategories () {
  return ({
    types: [
      LOAD_CATEGORIES,
      LOAD_CATEGORIES_SUCCESS,
      LOAD_CATEGORIES_FAIL
    ],
    promise: {
      url: 'https://my-bookmarks-api.herokuapp.com/api/categories',
      method: 'GET'
    }
  });
}
