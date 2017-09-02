import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      favLogin: null
    }

  }

  componentDidMount() {
    this.props.fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=2e3e042d41662d924dd805ae004b2106&language=en-US&page=1')
  }

  notLoggedInFav(bool)  {
    this.setState({
      favLogin: bool
    })
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
    const Movies = this.props.data.map((movie, i) => <Movie key={i} {...movie} favLogin={this.notLoggedInFav.bind(this)}/>)


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
