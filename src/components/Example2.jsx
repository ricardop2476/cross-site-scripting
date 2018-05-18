import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Link } from 'react-router-dom';

class Example2 extends Component {
  render() {
    return (
      <div>
      	<Navbar />
      	<Jumbotron title="Simulation" subtitle="Credit: hacksplaining.com"/>
        <div className="container" id="simulation">

          <Link to="/example3" id="link">Next</Link>
          
      	<img className="center" src={ require('../images/example2.png') } />
      	<p>
          Another thing that we are going to pretend is that a hacker is attacking the website. Oh no! 
          <br />
          The hacker is going to try to mess with the users of this website, by using his/her own JavaScript. 
          <br />
          As you can see, from the JavaScript that was used, a message could pop up on the innocent user’s screen and cause harm later on.
		    </p>
        </div>
      </div>
    );
  }
}

export default Example2;
