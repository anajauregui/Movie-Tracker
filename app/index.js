import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'

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
