import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Welcome from './components/welcome/welcome.jsx';
import About from './components/about/about.jsx';

// styling
import './App.css';

function App() {
  return (
    <div className='App'>
        <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;
