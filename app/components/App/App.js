import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import MoviesListContainer from '../../containers/MoviesListContainer';
import Controls from '../Controls/Controls';
import Background from '../Background/Background';
import Login from '../Login/Login';
import CreateAccountContainer from '../../containers/CreateAccountContainer';
import { fetchMovieData } from '../../actions/index';

export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <Background />
        <Controls />
        <Route exact path="/" component={MoviesListContainer}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/create-account" component={CreateAccountContainer}/>
      </div>
    )
  }
}
