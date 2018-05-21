import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Link } from 'react-router-dom';

class Example3 extends Component {
  render() {
    return (
      <div id="example3" onLoad={()=>{ alert(' Miss Bea Haven says: You stole my idea! I am going to get you in trouble!'); }}>
      	<Navbar />
      	<Jumbotron title="Simulation" subtitle="Credit: hacksplaining.com"/>

        <div className="container" id="simulation">
          <Link to="/example4" id="link">Next</Link>
          <img className="center" src={ require('../images/example3.png') } />
          <p>
            The Result!
          </p>

        </div>
      </div>
    );
  }
}


export default Example3;
