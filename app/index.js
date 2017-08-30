import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.js'
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import configureStore from './store/configureStore'
import rootReducer from './reducers/index';
// import { ConnectedRouter } from 'react-router-dom'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = configureStore(devTools);

// const router = (
  // <ConnectedRouter>
    // <App />
  // </ConnectedRouter>
// )

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  ,document.getElementById('main'))
