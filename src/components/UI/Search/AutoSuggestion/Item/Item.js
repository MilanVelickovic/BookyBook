import React from 'react';

import planeIcon from '../../../../../assets/Search/plane.svg';
import searchIcon from '../../../../../assets/Search/search.svg';

import classes from './Item.module.css';

const Item = (props) => {

    let item;

    let attachedClasses = [classes.Item, classes.primary];

    switch (props.itemType) {
        case "primary":
            item = <li className={attachedClasses.join(' ')}><img src={planeIcon} alt="Plane Icon"/>{props.children}</li>;
            break;
        case "secondary":
            item = <li className={classes.Item}><img src={searchIcon} alt="Search Icon"/>{props.children}</li>;
            break;
        default:
            item = <li className={attachedClasses.join(' ')}><img src={planeIcon} alt="Plane Icon"/>{props.children}</li>;
            break;
    }

    return item;

};

export default Item;