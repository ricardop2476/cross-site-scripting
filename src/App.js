import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Signs from './pages/Signs.jsx';
import Simulation from './pages/Simulation.jsx';

import Example2 from './components/Example2.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/signs" component={Signs}/>
          <Route path="/simulation" component={Simulation}/>

          <Route path="/example2" component={Example2}/>
        </div>
      </Router>
    );
  }
}

export default App;
