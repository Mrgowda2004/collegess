// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutUs from './components/About-us/AboutUs';
import Courses from './components/Courses-section/Courses'
import Faculty from './components/Faculty/Faculty';

function App() {
  return (
    <Router>
      <div>
        <header/>
        <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Courses" component={Courses} />
        <Route path="/Faculty" component={Faculty} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;