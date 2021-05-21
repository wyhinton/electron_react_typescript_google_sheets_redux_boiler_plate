import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { StoreProvider } from 'easy-peasy';
import ReactDOM from 'react-dom';
import store from './store';
ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
