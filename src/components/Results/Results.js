import React from 'react';

import Location from './Location/Location';

import classes from './Results.module.css';

import mapImage from '../../assets/Results/map.svg';

const Results = () => {
    
    let stores = [
        {
            name: "Sandbergs Frisör",
            rate: 4.8,
            votes: 53,
            location: "Hornsgatan 146B117 28 Stockholm"
        },
        {
            name: "Sandbergs Frisör",
            rate: 4.8,
            votes: 53,
            location: "Hornsgatan 146B117 28 Stockholm"
        },
        {
            name: "Sandbergs Frisör",
            rate: 4.8,
            votes: 53,
            location: "Hornsgatan 146B117 28 Stockholm"
        },
        {
            name: "Sandbergs Frisör",
            rate: 4.8,
            votes: 53,
            location: "Hornsgatan 146B117 28 Stockholm"
        },
        {
            name: "Sandbergs Frisör",
            rate: 4.8,
            votes: 53,
            location: "Hornsgatan 146B117 28 Stockholm"
        }
    ]; 

    return (
        <div className={classes.Results}>
            <p className={classes.resultsHeading}>Results for: Hairdresser, near me</p>
            <div className={classes.stores}>
                {stores.map(store => {
                    return <Location 
                                name={store.name}
                                rate={store.rate}
                                votes={store.votes}
                                location={store.location}/>
                })}
            </div>
            <div className={classes.map}>
                <img src={mapImage} alt="Map"/>
            </div>
        </div>
    );
};

export default Results;