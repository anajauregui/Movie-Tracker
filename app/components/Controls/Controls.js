import React, { Component } from 'react';


export default class Controls extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <section className='controls-container'>
          <div className='logo-container'>
            <h1 className='logo'>MovieTracker</h1>
          </div>
          <form>
            <input placeholder='Login'/>
            <button>Submit</button>
          </form>
        </section>
      </div>
    )
  }
}
