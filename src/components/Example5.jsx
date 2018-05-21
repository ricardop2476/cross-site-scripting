import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Link } from 'react-router-dom';

class Example5 extends Component {
  render() {
    return (
      <div>
      	<Navbar />
      	<Jumbotron title="Simulation" subtitle="Credit: hacksplaining.com"/>

        <div className="container" id="simulation" onLoad={()=>{ alert(''); }}>
          <Link to="/example6" id="link">Next</Link>
      	 <img className="center" src={ require('../images/example3.png') } />
      	 <p>
            img result
		    </p>

        </div>
      </div>
    );
  }
}

export default Example5;
