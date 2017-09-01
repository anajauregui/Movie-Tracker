import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter } from 'react-router-redux'
import thunk from 'redux-thunk';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import App from './components/App/App';
import rootReducer from './reducers/index';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const history = createHistory()

const store = createStore(
  rootReducer,
  devTools,
  applyMiddleware(thunk),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  ,document.getElementById('main'))
