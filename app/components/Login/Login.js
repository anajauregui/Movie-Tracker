import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginContainer from '../../containers/LoginContainer';
import { Link } from 'react-router-dom'

export class Login extends Component {
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
    const { loginSubmit, userLogin, loginError } = this.props
    const userInfo = {email: email.toLowerCase(), password: password}

    if(userLogin.isLoggedIn === 'success') {
      return <Redirect to='/'/>
    }

    return(
      <div className='login-container'>
        <form className='login-form'>
          <Link to ={'/'}><p className='login-title'>USER LOGIN</p></Link>
          <Link to ={'/'}><p className='home-login'>HOME</p></Link>
          <p className='error'>{loginError ? 'Email and Password do not match' : null}</p>
          <input className='input' placeholder=' Email'
            value={email}
            onChange= {e => this.setState({ email: e.target.value })}/>
          <input className='input' placeholder=' Password'
            value={password}
            onChange = {e => this.setState({ password: e.target.value})}/>
          <div className='submit-button' onClick={() => this.login(userInfo)}> <p className='submit-button-title'>LOGIN</p></div>
        </form>
      </div>
    )
  }
}

export default LoginContainer(Login);
