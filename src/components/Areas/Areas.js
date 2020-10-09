import React, { useState } from 'react';
import Aux from '../../hoc/Aux';

import Area from './Area/Area';

import classes from './Areas.module.css';

import hairdresser from '../../assets/Areas/hairdresser.png';
import nails from '../../assets/Areas/nails.png';
import massage from '../../assets/Areas/massage.png';
import makeUp from '../../assets/Areas/make-up.png';
import lashes from '../../assets/Areas/lashes.png';
import skincare from '../../assets/Areas/skincare.png';
import exercise from '../../assets/Areas/exercise.png';
import hairRemoval from '../../assets/Areas/hair-removal.png';

const Areas = () => {

    let areas = [
        {
            image: hairdresser,
            description: "Hairdresser"
        },
        {
            image: nails,
            description: "Nails"
        },
        {
            image: massage,
            description: "Massage"
        },
        {
            image: makeUp,
            description: "Make-Up"
        },
        {
            image: lashes,
            description: "Lashes"
        },
        {
            image: skincare,
            description: "Skincare"
        },
        {
            image: exercise,
            description: "Exercise"
        },
        {
            image: hairRemoval,
            description: "Hair removal"
        }
    ]

    return (
        <Aux>
            <p className={classes.areasHeading}>Popular areas</p>
            <div className={classes.Areas}>
                {areas.map(area => (
                    <Area type="button" image={area.image} description={area.description}/>
                ))}
                <Area type="moreButton" description="More..."/>
            </div>
        </Aux>
    );
};

export default Areas;