import React, { Component } from 'react';
import Movie from '../Movie/Movie'
import PropTypes from 'prop-types';

export default class MoviesList extends Component {

  componentDidMount() {
    this.props.fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=2e3e042d41662d924dd805ae004b2106&language=en-US&page=1')
  }

  render() {
    const Movies = this.props.data.map((movie, i) => <Movie key={i} {...movie} />)

    return (
      <div>
        <section className='movies-list-container'>
          {Movies}
        </section>
      </div>
    )
  }
}
