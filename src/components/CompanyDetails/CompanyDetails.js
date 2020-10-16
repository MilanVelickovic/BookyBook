import React from 'react';

import FirstSection from './FirstSection/FirstSection';
import SecondSection from './SecondSection/SecondSection';

import classes from './CompanyDetails.module.css';

const CompanyDetails = () => (
    <div className={classes.CompanyDetails}>
        <div className={classes.leftSide}>
            <FirstSection/>
            <SecondSection/>
        </div>
        <div className={classes.rightSide}>

        </div>
    </div>
);

export default CompanyDetails;