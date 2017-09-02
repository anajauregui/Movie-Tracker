import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class CreateAccount extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  render() {
    const { email, password, name} = this.state;
    const { createNewUser, newUser } = this.props
    const userInfo = {name: name, email: email.toLowerCase(), password: password}

    if(newUser.isNewAccount === 'success') {
      return <Redirect to='/login'/>
    }

    return(
      <div className='create-container'>
        <form className='create-form'>
          <p className='create-title'>CREATE ACCOUNT</p>
          <p className='error'>{newUser.error ? 'Email has already been used' : null}</p>
          <input className='input'placeholder=' Name'
            value={name}
            onChange= {e => this.setState({ name: e.target.value })}/>
          <input className='input' placeholder=' Email'
            value={email}
            onChange = {e => this.setState({ email: e.target.value})}/>
          <input className='input' placeholder=' Password'
            value={password}
            onChange = {e => this.setState({ password: e.target.value})}/>
          <div className='create-new-account-button' onClick={() => createNewUser(userInfo)
          }><p className='create-button2-title'>Create Account</p></div>
        </form>
      </div>
    )
  }
}
