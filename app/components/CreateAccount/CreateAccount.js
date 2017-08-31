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
      <div>
        <form>
          <input placeholder='Name'
            value={name}
            onChange= {e => this.setState({ name: e.target.value })}/>
          <input placeholder='Email'
            value={email}
            onChange = {e => this.setState({ email: e.target.value})}/>
          <input placeholder='Password'
            value={password}
            onChange = {e => this.setState({ password: e.target.value})}/>
          <div className='create-new-account-button' onClick={() => createNewUser(newUser)
          }><p>Create Account</p></div>
        </form>
      </div>

    )
  }
}
