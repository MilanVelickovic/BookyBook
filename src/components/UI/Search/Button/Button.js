import React from 'react';

import classes from './Button.module.css';

import filterIcon from '../../../../assets/Search/Buttons/filter.svg';
import itemsIcon from '../../../../assets/Search/Buttons/items.svg';

const Button = (props) => {

    let button;

    switch (props.buttonType) {
        case "Filter":
            button = <button className={classes.Button}>
                        <img src={filterIcon} alt="Filter"/>&nbsp;Filter
                    </button>;
            break;
        case "Items":
            button = <button className={classes.Button}>
                        <img src={itemsIcon} alt="Items"/>&nbsp;Items
                    </button>;
            break;
        default:
            button = <button className={classes.Button}>
                        <img src={filterIcon} alt="Filter"/>&nbsp;Filter
                    </button>;
            break;
    }

    return button;

};

export default Button;