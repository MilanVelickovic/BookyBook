import React from 'react';

import Link from './Link/Link';

import classes from './Links.module.css';

const Links = () => (
    <div className={classes.Links}>
        <Link>Log in/Sign up</Link>
        <Link>Cancel bookning</Link>
        <Link type="highlight">For business</Link>
    </div>
);

export default Links;