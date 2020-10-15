import React from 'react';

import classes from './Social.module.css';

import facebookIcon from '../../../assets/Footer/facebook.svg';
import instagramIcon from '../../../assets/Footer/instagram.svg';
import twitterIcon from '../../../assets/Footer/twitter.svg';

const Social = () => (
    <div className={classes.Social}>
        <img src={facebookIcon} alt="Facebook"/>
        <img src={instagramIcon} alt="Instagram"/>
        <img src={twitterIcon} alt="Twitter"/>
    </div>
);

export default Social;