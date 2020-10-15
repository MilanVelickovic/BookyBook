import React from 'react';

import { Link } from 'react-router-dom';

import lightBlueLogo from '../../../assets/Header/lightBlueLogo.svg';
import whiteLogo from '../../../assets/Header/whiteLogo.svg';

const Logo = (props) => {

    let logo = null;

    switch (props.color) {
        case "lightBlue":
            logo = lightBlueLogo;
            break;
        case "white":
            logo = whiteLogo;
            break;
        default:
            logo = lightBlueLogo;
            break;    
    }

    return (
        <Link to="/">
            <img src={logo} alt="BookyBook"/>
        </Link>
    );

};

export default Logo;