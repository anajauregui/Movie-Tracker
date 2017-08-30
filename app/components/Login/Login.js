import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      newEmail: '',
      newPassword: ''
    }
  }

  render() {
    const { email, password, name, newEmail, newPassword } = this.state;
    const { loginSubmit, createNewUser } = this.props
    const userInfo = {email: email.toLowerCase(), password: password}
    const newUser = {name: name, email: newEmail.toLowerCase(), password: newPassword}

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

        <form>
          <input placeholder='Name'
            value={name}
            onChange= {e => this.setState({ name: e.target.value })}/>
          <input placeholder='Email'
            value={newEmail}
            onChange = {e => this.setState({ newEmail: e.target.value})}/>
          <input placeholder='Password'
            value={newPassword}
            onChange = {e => this.setState({ newPassword: e.target.value})}/>
          <div className='create-new-account-button' onClick={() => createNewUser(newUser)
          }><p>Create Account</p></div>
        </form>
      </div>

    )
  }
}
