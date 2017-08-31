import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    const { email, password } = this.state;
    const { loginSubmit } = this.props
    const userInfo = {email: email.toLowerCase(), password: password}

    return(
      <div>
        <form>
          <input placeholder='Email'
            value={email}
            onChange= {e => this.setState({ email: e.target.value })}/>
          <input placeholder='Password'
            value={password}
            onChange = {e => this.setState({ password: e.target.value})}/>
          <div className='SubmitButton' onClick={() => loginSubmit(userInfo)
          }><p>Login</p></div>
        </form>
      </div>

    )
  }
}
