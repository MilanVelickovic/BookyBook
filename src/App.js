import React from 'react';

import LandingPage from './Pages/LandingPage';
import SearchResults from './Pages/SearchResults';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      {/*<LandingPage/>*/}
      <SearchResults/>
    </div>
  );
}

export default App;
