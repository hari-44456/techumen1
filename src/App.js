import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Events from './components/pages/Events';
import Contact from './components/pages/Contact';
import Sponsors from './components/pages/Sponsors';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/event' component={Events} />
          <Route path='/contact' component={Contact} />
          <Route path='/sponsors' component={Sponsors} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
