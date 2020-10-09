import React from 'react';

import Message from './Message/Message';
import Search from './Search/Search';

import classes from './Hero.module.css';

const Hero = () => (
    <div className={classes.Hero}>
        <Message/>
        <Search/>
    </div>
);

export default Hero;