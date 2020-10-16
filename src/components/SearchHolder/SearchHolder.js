import React from 'react';

import * as pages from '../../Pages/pages';

import Search from '../UI/Search/Search';
import Button from '../UI/Search/Button/Button';

import classes from './SearchHolder.module.css';

const SearchHolder = () => (
    <div className={classes.SearchHolder}>
        <Search forPage={pages.SEARCH_RESULTS}/>
        <Button buttonType="filter"/>
    </div>
);

export default SearchHolder;