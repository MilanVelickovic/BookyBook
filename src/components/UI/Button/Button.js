import React from 'react';

import * as pages from '../../../Pages/pages';

import classes from './Button.module.css';

const Button = (props) => {

    let attachedClasses = [classes.Button];

    if (props.forPage === pages.LANDING_PAGE) {
        attachedClasses.push(classes.buttonStyleForLocationServices);
    }

    if (props.buttonSize === 'large') {
        attachedClasses.push(classes.largeButton);
    }

    return (
        <button className={attachedClasses.join(' ')} type="button">{props.children}</button>
    );
}

export default Button;