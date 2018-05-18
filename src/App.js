import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Signs from './pages/Signs.jsx';
import Simulation from './pages/Simulation.jsx';

import Example2 from './components/Example2.jsx';
import Example3 from './components/Example3.jsx';
import Example4 from './components/Example4.jsx';
import Example5 from './components/Example5.jsx';
import Example6 from './components/Example6.jsx';
import Example7 from './components/Example7.jsx';

import Landing from './components/Landing.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/signs" component={Signs}/>
          <Route path="/simulation" component={Simulation}/>

          <Route path="/example2" component={Example2}/>
          <Route path="/example3" component={Example3}/>
          <Route path="/example4" component={Example4}/>
          <Route path="/example5" component={Example5}/>
          <Route path="/example6" component={Example6}/>
          <Route path="/example7" component={Example7}/>

          <Route path="/landing" component={Landing}/>
        </div>
      </Router>
    );
  }
}

export default App;
