import React from 'react';

import classes from './Submenu.module.css';

import arrowLeft from '../../assets/FilterOptions/arrow-left.svg';

const Submenu = () => (
    <div className={classes.Submenu}>
        <div className={classes.leftSide}>
            <img src={arrowLeft} alt="Arrow left"/>
            <p>Marta's Psychologist</p>
        </div>
        <div className={classes.pages}>
            <div>Services</div>
            <div>Personell</div>
            <div>Reviews</div>
        </div>
        <div className={classes.rightSide}></div>
    </div>
);

export default Submenu;