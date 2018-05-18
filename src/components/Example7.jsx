import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Link } from 'react-router-dom';

class Example7 extends Component {
  render() {
    return (
      <div>
      	<Navbar />
      	<Jumbotron title="Simulation" subtitle="Credit: hacksplaining.com"/>

        <div className="container" id="simulation">
          
      	 <img className="center" src={ require('../images/example6.png') } />
      	 <p>
            Likes.
		    </p>

        </div>
      </div>
    );
  }
}

export default Example7;
