import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import MoviesListContainer from '../../containers/MoviesListContainer';
import Controls from '../Controls/Controls';
import LoginContainer from '../../containers/LoginContainer';
import CreateAccountContainer from '../../containers/CreateAccountContainer';
import { fetchMovieData } from '../../actions/index';
// import { connect } from 'react-redux';

export default class App extends Component {

  // loginPath() {
  //
  // }

  render() {
    console.log(this.props);
    // if (this.props.hasErrored) {
    //     return <p>Sorry! There was an error loading the items</p>;
    //   }

    return (
      <div className='App'>
        <Controls />
        <Route exact path="/" component={MoviesListContainer}/>
        <Route exact path="/login" component={LoginContainer}/>
        <Route exact path="/create-account" component={CreateAccountContainer}/>
      </div>
    )
  }
}
