import { createStore } from 'redux';
import { mainReducer } from './reducers';

export function createReduxStore(isDev = true) {
  return createStore(
    mainReducer,
    isDev && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

