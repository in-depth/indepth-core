'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from '../shared/views/AppRoutes';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../shared/views/rootReducer'

// const history = createBrowserHistory()

let initialState = window.__INITIAL_STATE__

const store = createStore(rootReducer, initialState)

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRoutes/>
    </Provider>, document.getElementById('root'));
};
