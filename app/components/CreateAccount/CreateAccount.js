import React, { Component } from 'react';


export default class CreateAccount extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  render() {
    const { email, password, name} = this.state;
    const { createNewUser } = this.props
    const newUser = {name: name, email: email.toLowerCase(), password: password}

    return(
      <div className='create-container'>
        <form className='create-form'>
          <p className='create-title'>CREATE ACCOUNT</p>
          <input className='input'placeholder=' Name'
            value={name}
            onChange= {e => this.setState({ name: e.target.value })}/>
          <input className='input' placeholder=' Email'
            value={email}
            onChange = {e => this.setState({ email: e.target.value})}/>
          <input className='input' placeholder=' Password'
            value={password}
            onChange = {e => this.setState({ password: e.target.value})}/>
          <div className='create-new-account-button' onClick={() => createNewUser(newUser)
          }><p className='create-button2-title'>Create Account</p></div>
        </form>
      </div>

    )
  }
}
