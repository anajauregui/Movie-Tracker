import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    }
  }

  render() {
    const { menuOpen } = this.state;
    const { userLogout } = this.props;
    const resetUser = {email: '', password: ''}
    const menuItems = ['login', 'create account', 'favorites']
    const menu = menuItems.map((menu, i) => {
      return (
        <Link to ={`/${menu.replace(' ', '-')}`} key={i} onClick={() => this.setState({menuOpen: !menuOpen})} className='button'>
          {menu.toUpperCase()}
        </Link>
      )
    })

    return(
      <div>
        <section className='controls-container'>
          <div className='menu-button-container'>
            <img onClick={() => this.setState({menuOpen: !menuOpen})}
              className='menu-button' src='http://targetphoto.yesvideo.com/images/hp/iconFilmReels.png'/>
          </div>
          <Link to = {'/'}  className='logo-container'>
            <h1 className='logo'>MovieTracker</h1>
          </Link>
          <div
            className={menuOpen ? 'menu-overlay menu-overlay-open' : 'menu-overlay menu-overlay-close'}
            onClick={() => this.setState({menuOpen: !menuOpen})}></div>
          <div
            className={menuOpen ? 'menu-close menu-open' : 'menu-close menu-close-animation'}
            onClick={() => this.setState({menuOpen: !menuOpen})}>
            <div className={menuOpen ? 'menu-controls' : 'hide'}>
              <p className='menu-title'>MENU</p>
              {menu}
              <Link to ={'/'} onClick={() => (this.setState({menuOpen: !menuOpen}), userLogout(resetUser, false))} className='button'>
                LOGOUT
              </Link>
              <div onClick={() => window.open('https://www.fandango.com/')} className='button'>
                BUY TICKETS
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
