import React from 'react';

import * as pages from '../../Pages/pages';

import Logo from './Logo/Logo';
import Links from './Links/Links';
import MobileMenu from './MobileMenu/MobileMenu';

import classes from './Header.module.css';

const Header = (props) => {

    let header;

    switch (props.page) {
        case pages.LANDING_PAGE:
            header = <header className={classes.Header}>
                        <Logo color="lightBlue"/>
                        <Links linksForPage={pages.LANDING_PAGE}/>
                        <MobileMenu/>
                    </header>;
            break;
        case pages.SEARCH_RESULTS:
            header = <header className={classes.Header}>
                        <Logo color="lightBlue"/>
                        <Links linksForPage={pages.SEARCH_RESULTS}/>
                    </header>;  
            break;
        default:
            header = <header className={classes.Header}>
                        <Logo color="lightBlue"/>
                        <Links linksForPage={pages.LANDING_PAGE}/>
                        <MobileMenu/>
                    </header>;
            break;
    }

    return header;

}

export default Header;