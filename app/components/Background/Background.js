import React, { Component } from 'react';



const Background = () => {
    return (
      <div>
        <section className='background-container'>
          <img src='https://media.giphy.com/media/1EwzWQcmVipm8/giphy.gif' className='background-video'/>
          <div className='intro-container'>
            <div className='intro-logo-container'>
              <p className='intro-logo'>MOVIETRACKER</p>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Background;
