import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import MovieIndex from './components/movieIndex';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import rootReducer from './reducers';
// import { ConnectedRouter } from 'react-router-dom'

// const store = createStore(rootReducer, devTools);

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

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
