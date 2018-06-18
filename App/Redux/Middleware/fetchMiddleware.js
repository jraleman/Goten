// Return another function that will get executed between the dispatch of an
// action and right before the action gets into the reducer:
export default function fetchMiddleware({ dispatch, getState }) {
  return (next => action => {

    // We need to figure out if the current action contains a promise
    // property. If that's not the case, we need to ignore the action
    // and pass the action to the next middleware or the reducer
    const { promise, types, ...rest } = action;
    if (!promise) {
      return (next(action));
    }

    // If there's a promise property, we need to get the types in a separate
    // constant. This will allow us to dispatch the actions individually, at
    // different times.
    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });

    // Triggers the fetch request, parses the response to JSON,
    // and dispatches the success or error actions:
    const actionPromise = fetch(promise.url, promise);
    actionPromise
      .then(response => response.json())
      .then(payload => next({ ...rest, payload, type: SUCCESS }))
      .catch(error => next({ ...rest, error, type: FAILURE }));
    return (actionPromise);
  });
}
