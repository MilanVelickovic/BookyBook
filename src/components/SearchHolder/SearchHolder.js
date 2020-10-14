import React from 'react';

import Search from '../Hero/Search/Search';
import FilterButton from '../Hero/Search/FilterButton/FilterButton';

import classes from './SearchHolder.module.css';

const SearchHolder = () => (
    <div className={classes.SearchHolder}>
        <Search/>
        <FilterButton/>
    </div>
);

export default SearchHolder;