import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import Controls from '../Controls/Controls';
import Background from '../Background/Background';
import Login from '../Login/Login';
import MoviesList from '../MoviesList/MoviesList'
import CreateAccountContainer from '../../containers/CreateAccountContainer';


export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <Background />
        <Controls />
        <Route exact path="/" component={MoviesList}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/create-account" component={CreateAccountContainer}/>
        <Route exact path='/favorites' render={() => <MoviesList favorites={true}/>}/>
      </div>
    )
  }
}
