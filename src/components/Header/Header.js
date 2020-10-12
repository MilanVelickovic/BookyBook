import React from 'react';

import Logo from './Logo/Logo';
import Links from './Links/Links';
import MobileMenu from './MobileMenu/MobileMenu';

import classes from './Header.module.css';

const Header = () => (
    <header className={classes.Header}>
        <Logo color="lightBlue"/>
        <Links/>
        <MobileMenu/>
    </header>
);

export default Header;