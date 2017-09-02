import React from 'react';
import PropTypes from 'prop-types';
import LoginContainer from '../../containers/LoginContainer';

export const Movie = ({title, release_date, overview, poster_path, vote_average, userLogin, favLogin}) => {



  return (
    <div className='movie'>
      <div className='no-image-container'>
        <p className='no-image'>NO IMAGE</p>
      </div>
      <div className='movie-title-container'>
        <div className='movie-title-background'></div>
        <div className='inner-title-container'>
          <h2 className='movie-title'>{title}</h2>
        </div>
      </div>
      <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <div className='info-container-background'></div>
      <div className='info-container'>
        <div className='favorite-button' onClick={ () => favLogin(userLogin.isLoggedIn)}>
          <p className='favorite-button-title'>FAVORITE</p>
        </div>
        <h2 className='movie-title2'>{title}</h2>
        <h4 className='vote' >SCORE:  {vote_average}</h4>
        <h4 className='release' >RELEASE DATE:  {release_date}</h4>
        <p className='overview' >{overview}</p>
      </div>
    </div>
  )
}

export default LoginContainer(Movie);
