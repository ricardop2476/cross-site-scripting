import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Link } from 'react-router-dom';

class Example6 extends Component {
  render() {
    return (
      <div>
      	<Navbar />
      	<Jumbotron title="Simulation" subtitle="Credit: hacksplaining.com"/>

        <div className="container" id="simulation">
          <Link to="/example7" id="link">Next</Link>
      	 <img className="center" src={ require('../images/example5.png') } />
      	 <p>
            In this situation, the hacker wants to make a comment and have it be liked by fake people. The hacker does so by using this line of JavaScript code: <code> {"<script>upvote()</script> "}</code>
		    </p>

        </div>
      </div>
    );
  }
}

export default Example6;
