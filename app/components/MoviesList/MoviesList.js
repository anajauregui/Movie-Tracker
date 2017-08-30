import React from 'react';
import Movie from '../Movie/Movie'
import PropTypes from 'prop-types';

const MoviesList = ({movies}) => {

  const Movie = movies.map((movie, i) => <Movie key={i} {...movie} />)

  return (
    <div className='movies-list'>
      {Movie}
    </div>
  )
}

export default MoviesList
