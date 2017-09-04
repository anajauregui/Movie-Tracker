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
    this.notLoggedInFav = this.notLoggedInFav.bind(this)
  }

  componentDidMount() {
    const { getUserFavorites, userLogin, userFavorites, loginSubmit } = this.props

    this.props.fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=2e3e042d41662d924dd805ae004b2106&language=en-US&page=1')

    const savedUser = JSON.parse(localStorage.getItem('user'))

    savedUser ? loginSubmit(savedUser) : null

    userLogin.user_id ? getUserFavorites(userLogin.user_id) : null
  }

  componentWillReceiveProps(newProps) {
    const { getUserFavorites, userLogin } = newProps
    console.log(this.props);
    console.log("this.props.userLogin.isLoggedIn",this.props.userLogin.isLoggedIn);
    console.log("new.props.userLogin.isLoggedIn",newProps.userLogin.isLoggedIn);
    // console.log("newprops.loginerror",newProps.userLogin.isLoggedIn);
      if (this.props.userLogin.isLoggedIn !== newProps.userLogin.isLoggedIn) {
      getUserFavorites(userLogin.user_id)
    }
  }
// && newProps.loginError === false

  notLoggedInFav(bool)  {
    this.setState({
      favLogin: bool
    })
  }

  compareMovieArrays() {
    const { data, userFavorites, favorites } = this.props
    const moviesArray = favorites ? userFavorites : data

    if(userFavorites.length > 0) {
      const favoriteMovies = userFavorites.map(favMovie => favMovie.movie_id);

      return moviesArray.map(movie => {
        if(favoriteMovies.includes(movie.movie_id)) {
          return Object.assign({}, movie, {isFavorite: true});
        }
        return movie;
      });
    } else {
      return moviesArray
    }
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
    const Movies = this.compareMovieArrays().map((movie, i) => <Movie key={i} {...movie} favLogin={this.notLoggedInFav}/>)

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
