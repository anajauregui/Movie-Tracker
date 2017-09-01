import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  login(user) {
    this.props.loginSubmit(user);
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    const { email, password } = this.state;
    const { loginSubmit, userLogin } = this.props
    const { isLoggedIn, userInfo } = userLogin
    const user = {email: email.toLowerCase(), password: password}

    if(isLoggedIn) {
      return <Redirect to='/'/>
    }

    return(
      <div className='login-container'>
        <form className='login-form'>
          <p className='login-title'>USER LOGIN</p>
          <p className='error'>{!isLoggedIn && userInfo.email !== '' ? 'Email and Password do not match' : ''}</p>
          <input className='input' placeholder=' Email'
            value={email}
            onChange= {e => this.setState({ email: e.target.value })}/>
          <input className='input' placeholder=' Password'
            value={password}
            onChange = {e => this.setState({ password: e.target.value})}/>

          <div className='submit-button' onClick={() => this.login(user)}> <p className='submit-button-title'>LOGIN</p></div>
        </form>
      </div>

    )
  }
}
