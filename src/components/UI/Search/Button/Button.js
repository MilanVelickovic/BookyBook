import React from 'react';

import { withRouter } from 'react-router-dom';
import Aux from '../../../../hoc/Aux';

import classes from './Button.module.css';

import filterIcon from '../../../../assets/Search/Buttons/filter.svg';
import itemsIcon from '../../../../assets/Search/Buttons/items.svg';

const Button = (props) => {

    let content;

    switch (props.buttonType) {
        case "filter":
            content = <Aux>
                        <img src={filterIcon} alt="Filter"/>&nbsp;Filter
                      </Aux>;
            break;
        case "items":
            content = <Aux>
                        <img src={itemsIcon} alt="Items"/>&nbsp;Items
                      </Aux>;
            break;
        default:
            content = <Aux>
                        <img src={filterIcon} alt="Filter"/>&nbsp;Filter
                      </Aux>;
            break;
    }

    return (
        <button onClick={() => props.history.push(props.match.path + `/${props.buttonType}`)} className={classes.Button}>
            {content}
        </button>
    );

};

export default withRouter(Button);