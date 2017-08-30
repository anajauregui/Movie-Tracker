import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import rootReducer from './reducers/index';
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router';

import createHistory from 'history/createBrowserHistory'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = configureStore(devTools);
const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  ,document.getElementById('main'))
