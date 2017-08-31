import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Controls extends Component {
  constructor() {
    super();
      this.state = {
        menuOverlay: 'menu-overlay',
        menuSatus: 'menu-close',
        menuCard: 'hide',
        menuOpen: false
      }
  }

  openMenu()  {
    if(this.state.menuOpen === false) {
      this.setState({
        menuOverlay: 'menu-overlay menu-overlay-open',
        menuStatus: 'menu-close menu-open',
        menuCard: 'menu-controls',
        menuOpen: true
      })
    }
    if(this.state.menuOpen === true) {
      this.setState({
        menuOverlay: 'menu-overlay menu-overlay-close',
        menuStatus: 'menu-close menu-close-animation',
        menuCard: 'hide',
        menuOpen: false
      })
    }
  }

  render() {
    return(
      <div>
        <section className='controls-container'>
          <div className='menu-button-container'>
            <img onClick={ () => this.openMenu()}
              className='menu-button' src='http://targetphoto.yesvideo.com/images/hp/iconFilmReels.png'/>

          </div>
          <div className='logo-container'>
            <h1 className='logo'>MovieTracker</h1>
          </div>
          <div className={this.state.menuOverlay}></div>
          <div className={this.state.menuStatus}>
            <div className={this.state.menuCard}>
              <p className='menu-title'>MENU</p>
              <Link to = {'/login'} onClick={ () => this.openMenu()} className='login-button button' style={{ textDecoration: 'none' }}>
                <p className='login-button-title button-title'>LOGIN</p>
              </Link>
              <Link to = {'/create-account'} onClick={ () => this.openMenu()} className='create-button button' style={{ textDecoration: 'none' }}>
                <p className='create-button-title button-title'>CREATE ACCOUNT</p>
              </Link>
              <div onClick={ () => this.openMenu()} className='favorites-button button' style={{ textDecoration: 'none' }}>
                <p className='favorites-button-title button-title'>FAVORITES</p>
              </div>
              <div onClick={ () => this.openMenu()} className='favorites-button button' style={{ textDecoration: 'none' }}>
                <p className='favorites-button-title button-title'>LOG OUT</p>
              </div>

            </div>
          </div>
        </section>
      </div>
    )
  }
}
