import React from 'react';

import Description from './Description/Description';

import classes from './LocationServices.module.css';

import phoneVector from '../../assets/LocationServices/phoneVector.png';

const LocationServices = () => (
    <div className={classes.LocationServices}>
        <Description/>
        <img src={phoneVector} alt="Phone vector"/>
    </div>
);

export default LocationServices;