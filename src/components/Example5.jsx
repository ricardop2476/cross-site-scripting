import React, { Component } from 'react';
import './Example5.css';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Link } from 'react-router-dom';


class Example5 extends Component {
  render() {
    return (
      <div>
      	<Navbar />
      	<Jumbotron title="Simulation" subtitle="Credit: hacksplaining.com"/>

        <div className="container" id="simulation">
          <Link to="/example6" id="link">Next</Link>
      	 <img id="img1" src={ require('../images/example3.png') } />
      	 <p>
            img result
		    </p>
        <img className="center" id="img2" src={ require('../images/danger.png') } />
        </div>
      </div>
    );
  }
}

export default Example5;
