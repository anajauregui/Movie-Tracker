import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({title, release_date, overview, backdrop_path, vote_average}) => {
  console.log(backdrop_path)
  return (
    <div className='movie'>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
      <h4>{vote_average}</h4>
      <h4>{release_date}</h4>
      <p>{overview}</p>
    </div>
  )
}

export default Movie
