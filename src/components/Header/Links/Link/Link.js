import React from 'react';

import classes from './Link.module.css';

const Link = (props) => {

    let attachedClasses = [classes.Link];

    if (props.type === 'highlight') {
        attachedClasses.push(classes.highlight);
    }

    return (
        <p className={attachedClasses.join(' ')}>{props.children}</p>
    );

};

export default Link;