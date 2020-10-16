import React from 'react';

import Item from './Item/Item';

import classes from './AutoSuggestion.module.css';

const AutoSuggestion = () => {

    let test = [
        {
            id: 1,
            name: "New York"
        },
        {
            id: 2,
            name: "New York City"
        },
        {
            id: 3,
            name: "New York Times Square"
        },
        {
            id: 4,
            name: "Some other automatic alternative"
        }
    ];

    return (
        <div className={classes.AutoSuggestion}>
            <ul>
                <Item itemType="primary">Search near me</Item>
                {test.map(suggestion => {
                    return <Item key={suggestion.id} itemType="secondary">{suggestion.name}</Item>;
                })}
            </ul>
        </div>
    );

};

export default AutoSuggestion;