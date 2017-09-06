import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginContainer from '../../containers/LoginContainer';
import MovieContainer from '../../containers/MovieContainer';
import FavoritesContainer from '../../containers/FavoritesContainer';

export const Movie = ({title, release_date, overview, poster_path, vote_average, movie_id, favLogin, addFavorite, userLogin, userFavorites, deleteUserFavorite, isFavorite}) => {
  const {user_id} = userLogin
  const favMovie = {movie_id: movie_id, user_id, title, poster_path, release_date, vote_average, overview, isFavorite}

  const checkFavorite = (favorites) => {
    const duplicates = favorites.filter(movie => movie.movie_id === favMovie.movie_id)

    !duplicates.length ? addFavorite(favMovie) : deleteUserFavorite(user_id, favMovie.movie_id)
  }

  return (
    <div className={isFavorite ? 'favorite-movie movie' : 'movie'}>
      <div className='no-image-container'>
        <p className='no-image'> NO IMAGE </p>
      </div>
      <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <div className='info-container-background'></div>
      <div className='info-container'>
        <div className={isFavorite ? 'favorited' : 'favorite-button'} onClick={ () => userLogin.isLoggedIn ? checkFavorite(userFavorites) : favLogin(userLogin.isLoggedIn) }>
          <p className={isFavorite ? 'favorited-button-title' : 'favorite-button-title'}> FAVORITE </p>
        </div>
        <h2 className='movie-title2'> {title} </h2>
        <h4 className='vote'> SCORE: {vote_average} </h4>
        <h4 className='release'> RELEASE DATE: {release_date} </h4>
        <p className='overview'> {overview} </p>
      </div>
    </div>
  )
}

export default FavoritesContainer(MovieContainer(LoginContainer(Movie)));
