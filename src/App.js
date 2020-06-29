import React from 'react';
import './App.css';

import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
import Contact from '../src/pages/Contact/Contact';
import Error from '../src/pages/Error/Error';
import Navbar from '../src/components/Navbar';

import {Switch, Route} from 'react-router-dom';



const App = () => {
  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
