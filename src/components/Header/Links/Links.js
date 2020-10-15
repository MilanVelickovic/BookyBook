import React from 'react';

import * as pages from '../../../Pages/pages';

import Link from './Link/Link';

import classes from './Links.module.css';

import calendarIcon from '../../../assets/Header/calendar.svg';
import heartIcon from '../../../assets/Header/heart.svg';
import userIcon from '../../../assets/Header/user.svg';

const Links = (props) => {

    let links;

    switch (props.forPage) {
        case pages.LANDING_PAGE:
            links = <div className={classes.Links}>
                        <Link>Log in/Sign up</Link>
                        <Link>Cancel bookning</Link>
                        <Link type="highlight">For business</Link>
                    </div>;
            break;
        case pages.SEARCH_RESULTS:
            links = <div className={classes.Links}>
                        <Link><img src={calendarIcon} alt="Calendar"/>&nbsp;Bookinger</Link>
                        <Link><img src={heartIcon} alt="Heart"/>&nbsp;Favoritter</Link>
                        <Link><img src={userIcon} alt="User"/>&nbsp;Christian Jebrail</Link>
                    </div>;
            break;
        default:
            links = <div className={classes.Links}>
                        <Link>Log in/Sign up</Link>
                        <Link>Cancel bookning</Link>
                        <Link type="highlight">For business</Link>
                    </div>;
            break;    
    }

    return links;

};

export default Links;