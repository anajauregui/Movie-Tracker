import React, { Component } from 'react';


export default class Controls extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <header>
        <h1>MovieTracker</h1>
        <form>
          <input placeholder='Login'/>
          <button>Submit</button>
        </form>
      </header>
    )
  }
}
