import React from 'react';

import classes from './Option.module.css';

const Option = (props) => (
    <li className={classes.Option}>
        <input type="checkbox" name={props.name} value={props.name}/>
        &nbsp;<label htmlFor={props.name}>{props.name}</label>
    </li>
);

export default Option;