import React from 'react';

import { withRouter } from 'react-router-dom';

import Option from './Option/Option';
import Button from '../../../components/UI/Button/Button';

import classes from './FilterOptions.module.css';

import arrowLeft from '../../../assets/FilterOptions/arrow-left.svg';

const FilterOptions = (props) => {

    let options = [
        {
            id: 1,
            name: "Nearest my location"
        }, 
        {
            id: 2,
            name: "Highest rating"
        }
    ];

    return (
        <div className={classes.FilterOptions}>
            <div className={classes.top}>
                <p>Filter</p>
            </div>
            <img src={arrowLeft} onClick={() => props.history.goBack()} alt="Arrow Left"/>
            <ul className={classes.options}>        
                {options.map(option => {
                    return <Option
                                key={option.id}
                                name={option.name}/>
                })}
            </ul>
            <div className={classes.bottom}>
                <Button buttonSize="large">Show results</Button>
            </div>
        </div>
    );

};

export default withRouter(FilterOptions);