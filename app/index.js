import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import MovieIndex from './components/movieIndex';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import rootReducer from './reducers';
// import { ConnectedRouter } from 'react-router-dom'

// const store = createStore(rootReducer);
const router = (
  // <ConnectedRouter>
    <App />
  // </ConnectedRouter>
)

ReactDOM.render(
  // <Provider store={store}>
    router
  // </Provider>,
  ,document.getElementById('main'))
