import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import SearchResults from './Pages/SearchResults';
import CompanyProfile from './Pages/CompanyProfile';
import FilterOptions from './Pages/Options/FilterOptions/FilterOptions';

import classes from './App.module.css';

function App() {
  return (
    <Router>
      <div className={classes.App}>
        <Switch>
          <Redirect from="/" exact to="/home"/>
          <Route path="/home" component={LandingPage}/>
          <Route path="/search" exact component={SearchResults}/>
          <Route path="/search/filter" component={FilterOptions}/>
          <Route path="/companyProfile" exact component={CompanyProfile}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
