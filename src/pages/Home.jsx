import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import './Home.css';
import Landing from '../components/Landing.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
        <div className="container" id="content">
          <h2 id="header">Independent Study Objective</h2>
          <p id ="paragraph">
            Hello there! The purpose of this website is to present what we (Ricardo and Kelly) have learned during our Independent Study unit of SEP12 class. Initially, we were not working together. We were instructed to pick a topic that we were interested on our own. Once a topic was chosen, we researched about it as much as we can. With the accumulated knowledge, we thought about ways to tinker. An instance of that could be when a student is tinkering with JavaScript code. Ricardo chose to learn about React JS while I chose to learn about cybersecurity. Then, at the end of each week, we type entries in our blogs about what we have learned that week and reflect on it with takeaways and next steps. <br />
            Along the way of thinking about what product I can make, I asked my teacher, Mr. Mueller about what kind of programming language I should use to display my product. He then suggested that I could work with Ricardo because I mentioned to him that I want to do something similar to how I learned from Hacksplaining. I reached out to my classmate to see if he is willing to work with me, and luckily, he said “yes”! 
          </p>
        </div>
      </div>
    );
  }
}

export default Home
