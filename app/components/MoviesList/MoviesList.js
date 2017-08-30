import React from 'react';
import Movie from '../Movie/Movie'
import PropTypes from 'prop-types';

const MoviesList = ({movies}) => {

  const Movies = movies.map((movie, i) => <Movie key={i} {...movie} />)

  return (
    <div>
      <section className='movies-list-container'>
        {Movies}
      </section>
    </div>
  )
}

export default MoviesList
