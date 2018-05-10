import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { reducers, initialState } from './reducers'

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk)
);

export default store;
