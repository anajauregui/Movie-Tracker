import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import MoviesListContainer from '../../containers/MoviesListContainer';
import Controls from '../Controls/Controls';
import Background from '../Background/Background';
import LoginContainer from '../../containers/LoginContainer';
import { fetchMovieData } from '../../actions/index';

export default class App extends Component {


  render() {
    // if (this.props.hasErrored) {
    //     return <p>Sorry! There was an error loading the items</p>;
    //   }

    return (
      <div className='App'>
        <Background />
        <Controls />
        <Route exact path="/" component={MoviesListContainer}/>
        <Route exact path="/login" component={LoginContainer}/>
      </div>
    )
  }
}
