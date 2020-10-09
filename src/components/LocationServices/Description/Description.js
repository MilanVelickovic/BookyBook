import React from 'react';

import classes from './Description.module.css';

const Description = () => (
    <div className={classes.Description}>
        <h1>Turn on location services</h1>
        <p>Get recommendations of great businesses! Turn on location services so<br/> we can show what's nearby.</p>
        <button type="button">Search near me</button>
    </div>
);

export default Description;