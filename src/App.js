import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import GetHero from './components/GetHero/GetHero';
import Error from './components/Error/Error';

function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/gethero' component={GetHero} />
          <Route path='*' component={Error} />
        </Switch>
    </div>
  );
}

export default App;
