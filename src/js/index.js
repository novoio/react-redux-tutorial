// src/js/index.js
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../js/store/index';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
