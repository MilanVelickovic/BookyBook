import React from 'react';

import Logo from '../Header/Logo/Logo';
import Social from './Social/Social'

import classes from './Footer.module.css';

const Footer = () => (
    <div className={classes.Footer}>
        <div className={classes.part}>
            <Logo color="white"/>
            <Social/>
        </div>
        <div className={classes.part}>
            <p>&copy;&nbsp;BookyBook 2021&nbsp;|&nbsp;All right reserved.</p>
            <p>Contact us&nbsp;|&nbsp;About us&nbsp;|&nbsp;Privacy Policy&nbsp;|&nbsp;Terms of Service</p>
        </div>
    </div>
);

export default Footer;