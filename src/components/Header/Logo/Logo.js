import React from 'react';

import lightBlueLogo from '../../../assets/Header/lightBlueLogo.png';
import whiteLogo from '../../../assets/Header/whiteLogo.png';

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
        <img src={logo} alt="BookyBook"/>
    );

};

export default Logo;