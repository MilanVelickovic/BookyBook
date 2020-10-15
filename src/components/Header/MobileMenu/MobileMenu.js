import React from 'react';

import * as pages from '../../../Pages/pages';

import classes from './MobileMenu.module.css';

import burgerIcon from '../../../assets/Header/burger.svg';
import calendarIcon from '../../../assets/Header/calendar.svg';

const MobileMenu = (props) => {
    let button;
    let attachedClasses = [classes.MobileMenu];

    switch (props.forPage) {
        case pages.LANDING_PAGE:
            button = "Log in";
            break;
        case pages.SEARCH_RESULTS:
            button = <p><img src={calendarIcon} alt="Calendar"/>&nbsp;Bookings</p>;
            attachedClasses.push(classes.extendedWidth);
            break;
        default:
            button = "Log in";
            break;
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <button>{button}</button>
            <img src={burgerIcon} className={classes.burgerIcon} alt="Burger Icon"/>
        </div>
    );
};

export default MobileMenu;