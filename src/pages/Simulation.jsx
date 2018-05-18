import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Simulation.css';
import { Link } from 'react-router-dom';
import Example1 from '../components/Example1.jsx';

class Simulation extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Simulation" subtitle="Let's see this in action!"/>
        <div className="container">
          <h3>What is Cross-site Scripting (XSS)?</h3>
          <p>
            Cross-site Scripting (XSS) is a method that allows users to add onto a site’s content, which can possibly lead to injection of malicious JavaScript. In other words, it is a method where a person can sneakily insert their own code onto someone else’s premade code and then, have it run on the other person’s site.
          </p>

          <Link to="/example2" id="link">Next</Link>
          <Example1 />
        </div>
      </div>
    );
  }
}

export default Simulation
