import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Contact from './components/contact/contact.jsx';
import Resume from './components/resume/resume.jsx';

// styling
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resume' component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
