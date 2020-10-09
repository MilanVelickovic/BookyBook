import React from 'react';

import classes from './Area.module.css';

const Area = (props) => {

    let attachedClasses = [classes.Area];

    if (props.type === "moreButton") {
        attachedClasses.push(classes.more);
    }

    return (
        <div className={attachedClasses.join(' ')}>
            {props.type === "button" ? <img src={props.image} alt={props.description}/> : null}
            <p>{props.description}</p>
        </div>
    );
};

export default Area;