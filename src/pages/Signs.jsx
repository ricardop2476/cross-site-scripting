import React, { Component } from 'react';
import './Signs.css';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Signs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Signs To Look Out For" subtitle="This page is all about signs."/>
        <div className="container" id="contentt">
          <h2>Worms</h2>
          <p>
            Worm is a malicious program that can multiply itself and can leak into other systems. A user can be a victim to this if he/she mistakenly downloaded or executed some thing that was thought to be something else.
            <br />
            Who created this?!  
            Well, it was <a href="https://en.wikipedia.org/wiki/Samy_Kamkar" target="_blank" className="signs">Samy Kamkar</a> (a.k.a JS.Spacehero) who created <a href="https://en.wikipedia.org/wiki/Samy_(computer_worm)" target="_blank" className="signs">Samy</a> (computer worms). He created the fastest virus spread of all time in MySpace, where over 1,000,000 users ran the “<a href="https://en.wikipedia.org/wiki/ Payload_(computing)" target="_blank" className="signs">payload</a>”.   
            <br /> <br />
            In this incident, a user would look at an infected profile page first. From that, a payload gets copied and injected into the other user’s profile page. This cycle continues on. It has even happened to known social media websites like Facebook, Twitter, and YouTube.  
            <br />
            However, Kamkar is not a bad guy! Read the link to know why! 
            </p>

            <h2>Hijacking</h2>
            <p>
              Hijacking is when a hacker is stealing something while a user is having a session with his/her computer at the moment. A session is when a user is using a computer, which would communicate to other devices.  
              <br /> <br />
              The hacker is able to hijack a session by using his/her own JavaScript code. A session ID would be needed by the hacker to have it sent to a site that is under his/her control and pretend to be the user.  
            </p>

            <h2>Identity Theft</h2>
            <p>
              Identity theft occurs when confidential info is entered into a website that has been messed with before already. Once the confidential info is inputted, its details can be stolen through JavaScript.
              <br />
              <strong>Examples of Where This Would Be Used:</strong>
              <ul>
                <li>Stealing sensitive data (ex: passwords)</li>
                <li>Financial fraud on banking websites</li>
              </ul>
            </p>
        </div>
      </div>
    );
  }
}

export default Signs
