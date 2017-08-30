import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import MoviesListContainer from '../../containers/MoviesListContainer';
import Controls from '../Controls/Controls';
import { fetchMovieData } from '../../actions/index';

export default class App extends Component {


  render() {
    // if (this.props.hasErrored) {
    //     return <p>Sorry! There was an error loading the items</p>;
    //   }
    
    return (
      <div className='App'>
        <Controls />
        <MoviesListContainer />
      </div>
    )
  }
}
