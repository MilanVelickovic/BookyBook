import React from 'react';

import classes from './FirstSection.module.css';

import starIcon from '../../../assets/Results/star.svg';
import heartIcon from '../../../assets/CompanyDetails/heart.svg';

const FirstSection = () => (
    <div className={classes.FirstSection}>
        <div className={classes.logotype}>
            <p>LOGOTYPE + Extra work-pictures.<br/>Always logo first. Move section up if<br/> there is no logo.</p>
        </div>
        <div className={classes.details}>
            <div className={classes.user}>
                <p><b>Marta's Psychologist</b></p>
                <img src={heartIcon} alt="Heart Icon"/>
            </div>
            <div className={classes.stats}>
                <p><b>4,8</b></p>
                <div className={classes.stars}>
                    <img src={starIcon} alt="Star"/>
                    <img src={starIcon} alt="Star"/>
                    <img src={starIcon} alt="Star"/>
                    <img src={starIcon} alt="Star"/>
                    <img src={starIcon} alt="Star"/>
                </div>
                <p>(53 recensioner)</p>
            </div>
            <p className={classes.location}>Hornsgatan 146B, 117 28 Stockholm</p>
        </div>
    </div>
);

export default FirstSection;