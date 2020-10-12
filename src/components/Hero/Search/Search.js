import React from 'react';

import classes from './Search.module.css';

import searchIcon from '../../../assets/HeroSection/Input/search.png';
import locationIcon from '../../../assets/HeroSection/Input/location.png';

const Search = () => (
    <form className={classes.Search}>
        <div className={classes.part}>
            <img src={searchIcon} alt="Search Icon"/>
            <input type="text" placeholder="Write service, performer or company"/>
        </div>    
        <div className={classes.part}>
            <img src={locationIcon} alt="Location Icon"/>
            <input type="text" placeholder="Write city or area"/>
        </div>
        <button type="submit" value="submit">Search</button>
    </form>
);

export default Search;