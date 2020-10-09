import React from 'react';

import classes from './Social.module.css';

import facebookIcon from '../../../assets/Footer/facebook.png';
import instagramIcon from '../../../assets/Footer/instagram.png';
import twitterIcon from '../../../assets/Footer/twitter.png';

const Social = () => (
    <div className={classes.Social}>
        <img src={facebookIcon} alt="Facebook"/>
        <img src={instagramIcon} alt="Instagram"/>
        <img src={twitterIcon} alt="Twitter"/>
    </div>
);

export default Social;