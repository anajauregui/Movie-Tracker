import React from 'react';
import PropTypes from 'prop-types';
import LoginContainer from '../../containers/LoginContainer';
import MovieContainer from '../../containers/MovieContainer';
import FavoritesContainer from '../../containers/FavoritesContainer';

export const Movie = ({title, release_date, overview, poster_path, vote_average, id, favLogin, addFavorite, userLogin, userFavorites}) => {
  const {user_id} = userLogin
  const favMovie = {movie_id: id, user_id, title, poster_path, release_date, vote_average, overview}

  function checkFavorite(favorites) {
    const duplicates = favorites.filter(movie => movie.title === favMovie.title)
    console.log('duplicates', duplicates)
    if(!duplicates.length) {addFavorite(favMovie)}
  }

  return (
    <div className='movie'>
      <div className='no-image-container'>
        <p className='no-image'>NO IMAGE</p>
      </div>
      <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <div className='info-container-background'></div>
      <div className='info-container'>
        <div className='favorite-button' onClick={ () => userLogin.isLoggedIn ? checkFavorite(userFavorites) : favLogin(userLogin.isLoggedIn)}>
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

export default FavoritesContainer(MovieContainer(LoginContainer(Movie)));
