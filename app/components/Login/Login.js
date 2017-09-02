import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginContainer from '../../containers/LoginContainer'

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
    const { loginSubmit, userLogin } = this.props
    // const { isLoggedIn } = userLogin
    const userInfo = {email: email.toLowerCase(), password: password}

    if(userLogin.isLoggedIn) {
      return <Redirect to='/'/>
    }

    return(
      <div className='login-container'>
        <form className='login-form'>
          <p className='login-title'>USER LOGIN</p>
          <p className='error'>{userLogin.status === 500 ? 'Email and Password do not match' : null}</p>
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
