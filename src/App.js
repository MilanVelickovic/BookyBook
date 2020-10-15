import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import SearchResults from './Pages/SearchResults';

import classes from './App.module.css';

function App() {
  return (
    <Router>
      <div className={classes.App}>
        <Switch>
          <Redirect from="/" exact to="/home"/>
          <Route path="/home" component={LandingPage}/>
          <Route path="/search" component={SearchResults}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
