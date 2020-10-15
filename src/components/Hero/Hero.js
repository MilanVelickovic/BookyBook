import React from 'react';

import * as pages from '../../Pages/pages';

import Message from './Message/Message';
import Search from '../UI/Search/Search';

import classes from './Hero.module.css';

const Hero = () => (
    <div className={classes.Hero}>
        <Message/>
        <Search forPage={pages.LANDING_PAGE}/>
    </div>
);

export default Hero;