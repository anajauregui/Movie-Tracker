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
    const { isLoggedIn } = userLogin
    const userInfo = {email: email.toLowerCase(), password: password}

    if(isLoggedIn) {
      return <Redirect to='/'/>
    }

    return(
      <div>
        <form>
          <input placeholder='Email'
            value={email}
            onChange= {e => this.setState({ email: e.target.value })}/>
          <input placeholder='Password'
            value={password}
            onChange = {e => this.setState({ password: e.target.value})}/>
          <div className='SubmitButton' onClick={() => this.login(userInfo)}>
          <p>LOGIN</p>
          </div>
        </form>
      </div>

    )
  }
}
