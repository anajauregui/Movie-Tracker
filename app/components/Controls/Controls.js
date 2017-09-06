import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../../containers/LoginContainer';
import PropTypes from 'prop-types';

export class Controls extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
      favLogin: null
    }
  }

  notLoggedInFav(bool)  {
    this.setState({favLogin: bool})
  }

  falseFav()  {
    if(this.state.favLogin === false) {
      return (
        <section className='fav-login-container'>
          <Link to = {'/'}><div className='fav-login-container-background' onClick={() => (this.notLoggedInFav(null))}></div></Link>
          <form className='fav-login-form'>
            <Link to = {'/'}><p className='fav-login-title' onClick={() => (this.notLoggedInFav(null))}>SORRY</p></Link>
            <p className='fav-instructions'>You must be logged in or create a user account to access favorites.</p>
            <Link to = {'/login'} className='fav-login-button'
                onClick={() => this.login(userInfo)}>
              <p className='fav-login-button-title'>LOGIN</p>
            </Link>
            <Link to = {'/create-account'} className='fav-login-button'
                onClick={() => this.login(userInfo)}>
              <p className='fav-login-button-title'>CREATE ACCOUNT</p>
            </Link>
            <Link to = {'/'} className='fav-login-button'
                onClick={() => (this.notLoggedInFav(null))}>
              <p className='fav-login-button-title'>CLOSE</p>
            </Link>
          </form>
        </section>
      )
    }
  }

  render() {
    const { menuOpen } = this.state;
    const { userLogout } = this.props;
    const { userLogin } = this.props
    const resetUser = {email: '', password: ''}
    const menuItems = ['login', 'create account']
    const menu = menuItems.map((menu, i) => {
      return (
        <Link to ={`/${menu.replace(' ', '-')}`} key={i} onClick={() => this.setState({menuOpen: !menuOpen})} className='button'>
          {menu.toUpperCase()}
        </Link>
      )
    })

    console.log('jason', userLogin.userInfo.email)

    return(
      <div>
        {this.falseFav()}
        <section className='controls-container'>
          <div className='menu-button-container'>
            <img onClick={() => this.setState({menuOpen: !menuOpen})}
              className='menu-button' src='http://targetphoto.yesvideo.com/images/hp/iconFilmReels.png'/>
          </div>
          <Link to ={'/'}  className='logo-container'>
            <h1 className='logo'>MovieTracker</h1>
          </Link>
          <div
            className={menuOpen ? 'menu-overlay menu-overlay-open' : 'menu-overlay menu-overlay-close'}
            onClick={() => this.setState({menuOpen: !menuOpen})}></div>
          <div
            className={menuOpen ? 'menu-close menu-open' : 'menu-close menu-close-animation'}
            onClick={() => this.setState({menuOpen: !menuOpen})}>
            <div className={menuOpen ? 'menu-controls' : 'hide'}>
              <Link to ={'/'}><p className='menu-title'>MENU</p></Link>
              <p className='home'>HOME</p>
              {menu}
              <Link to ={'/favorites'} onClick={() => (this.setState({menuOpen: !menuOpen}), this.notLoggedInFav(userLogin.isLoggedIn))} className='button'>
                FAVORITES
              </Link>
              <Link to ={'/'} onClick={() => (this.setState({menuOpen: !menuOpen}), localStorage.removeItem('user'), userLogout(resetUser, false))} className='button'>
                LOGOUT
              </Link>
              <div onClick={() => window.open('https://www.fandango.com/')} className='button'>
                BUY TICKETS
              </div>
              <div onClick={() => this.setState({menuOpen: !menuOpen})} className='button'>
                CLOSE
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default LoginContainer(Controls)
