import React from 'react';

import Item from './Item/Item';

import classes from './AutoSuggestion.module.css';

const AutoSuggestion = () => {

    let test = ["New York", "New York City", "New York Times Square", "Some other automatic alternative"];

    return (
        <div className={classes.AutoSuggestion}>
            <ul>
                <Item itemType="primary">Search near me</Item>
                {test.map(suggestion => {
                    return <Item itemType="secondary">{suggestion}</Item>;
                })}
            </ul>
        </div>
    );

};

export default AutoSuggestion;