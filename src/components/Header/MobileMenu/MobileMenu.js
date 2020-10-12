import React from 'react';

import classes from './MobileMenu.module.css';

import burgerIcon from '../../../assets/Header/burger.png';

const MobileMenu = () => (
    <div className={classes.MobileMenu}>
        <p>Log in</p>
        <img src={burgerIcon} className={classes.burgerIcon} alt="Burger Icon"/>
    </div>
);

export default MobileMenu;