import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createReduxStore } from './state/store';
import { Provider } from 'react-redux';

const store = createReduxStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
