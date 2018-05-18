import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <div className="container">
          <img className="logo" src={ require('../images/security.png') } />
          <div className="text">
            <h1>Cross Site Scripting</h1>
            <h5>
              The Importance of Cyber Security.
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing
