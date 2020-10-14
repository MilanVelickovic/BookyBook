import React from 'react';

import * as pages from '../Pages/pages';

import Aux from '../hoc/Aux';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Areas from '../components/Areas/Areas';
import LocationServices from '../components/LocationServices/LocationServices';
import Footer from '../components/Footer/Footer';

const LandingPage = () => (
    <Aux>
        <Header page={pages.LANDING_PAGE}/>
        <Hero/>
        <Areas/>
        <LocationServices/>
        <Footer/>
    </Aux>
);

export default LandingPage;