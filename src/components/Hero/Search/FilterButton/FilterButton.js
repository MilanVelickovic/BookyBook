import React from 'react';

import classes from './FilterButton.module.css';

import filterIcon from '../../../../assets/Header/filter.png';

const FilterButton = () => (
    <button className={classes.FilterButton}>
        <img src={filterIcon} alt="Filter"/>&nbsp;Filter
    </button>
);

export default FilterButton;