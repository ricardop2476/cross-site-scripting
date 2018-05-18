import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Simulation extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Simulation" subtitle="Let's see this in action!"/>
        <div className="container">
          
        </div>
      </div>
    );
  }
}

export default Simulation
