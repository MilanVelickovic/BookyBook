import React from 'react';

import classes from './Location.module.css';

import storeIcon from '../../../assets/Results/store.png';
import starIcon from '../../../assets/Results/star.svg';

const Location = (props) => (

    <div className={classes.Location}>
        <img src={storeIcon} alt="Store"/>
        <div className={classes.description}>
            <p className={classes.name}>{props.name}</p>
            <div className={classes.stats}>
                <p><b>{props.rate}</b></p>
                <div className={classes.stars}>
                    <img src={starIcon} alt="Star"/>
                    <img src={starIcon} alt="Star"/>
                    <img src={starIcon} alt="Star"/>
                    <img src={starIcon} alt="Star"/>
                    <img src={starIcon} alt="Star"/>
                </div>
                <p>({props.votes})</p>
            </div>
            <p className={classes.location}>{props.location}</p>
        </div>
    </div>

);

export default Location;