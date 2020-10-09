import React from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Areas from './components/Areas/Areas';
import LocationServices from './components/LocationServices/LocationServices';
import Footer from './components/Footer/Footer';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Header/>
      <Hero/>
      <Areas/>
      <LocationServices/>
      <Footer/>
    </div>
  );
}

export default App;
