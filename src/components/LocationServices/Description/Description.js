import React from 'react';

import * as pages from '../../../Pages/pages';

import Button from '../../UI/Button/Button';

import classes from './Description.module.css';

const Description = () => (
    <div className={classes.Description}>
        <h1>Turn on location services</h1>
        <p>Get recommendations of great businesses! Turn on location services so<br/> we can show what's nearby.</p>
        <Button forPage={pages.LANDING_PAGE}>Search near me</Button>
    </div>
);

export default Description;