import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MoviesListContainer from '../../containers/MoviesListContainer'
import LoginContainer from '../../containers/LoginContainer';
import FavoritesContainer from '../../containers/FavoritesContainer'

export class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      favLogin: null
    }
  }

  componentDidMount() {
    const { getUserFavorites, userLogin, userFavorites } = this.props
    this.props.fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=2e3e042d41662d924dd805ae004b2106&language=en-US&page=1')
    if (userLogin.user_id) {getUserFavorites(userLogin.user_id)}

  }

  notLoggedInFav(bool)  {
    this.setState({favLogin: bool})
  }

  falseFav()  {
    if(this.state.favLogin === false) {
      return (
        <section className='fav-login-container'>
          <div className='fav-login-container-background' onClick={() => (this.notLoggedInFav(null))}></div>
          <form className='fav-login-form'>
            <p className='fav-login-title' onClick={() => (this.notLoggedInFav(null))}>SORRY</p>
            <p className='fav-instructions'>You must be logged in or create a user account to access favorites.</p>
            <Link to = {'/login'} className='fav-login-button'
                onClick={() => this.login(userInfo)}>
              <p className='fav-login-button-title'>LOGIN</p>
            </Link>
            <Link to = {'/create-account'} className='fav-login-button'
                onClick={() => this.login(userInfo)}>
              <p className='fav-login-button-title'>CREATE ACCOUNT</p>
            </Link>
            <div className='fav-login-button'
                onClick={() => (this.notLoggedInFav(null))}>
              <p className='fav-login-button-title'>CLOSE</p>
            </div>
          </form>
        </section>
      )
    }
  }

  render() {
    const { data, userFavorites, favorites } = this.props
    const moviesArray = favorites ? userFavorites : data
    const Movies = moviesArray.map((movie, i) => <Movie key={i} {...movie} favLogin={this.notLoggedInFav.bind(this)}/>)

    return (
      <div>
        {this.falseFav()}
        <section className='movies-list-container'>
          {Movies}
        </section>
      </div>
    )
  }
}

export default FavoritesContainer(MoviesListContainer(LoginContainer(MoviesList)));
