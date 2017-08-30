import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { ConnectedRouter } from 'react-router-dom'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  rootReducer,
  devTools,
  applyMiddleware(thunk),
)

// const router = (
  // <ConnectedRouter>
    // <App />
  // </ConnectedRouter>
// )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('main'))
