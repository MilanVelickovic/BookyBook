import React from 'react';
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
            id: 1,
            image: hairdresser,
            description: "Hairdresser"
        },
        {
            id: 2,
            image: nails,
            description: "Nails"
        },
        {
            id: 3,
            image: massage,
            description: "Massage"
        },
        {
            id: 4,
            image: makeUp,
            description: "Make-Up"
        },
        {
            id: 5,
            image: lashes,
            description: "Lashes"
        },
        {
            id: 6,
            image: skincare,
            description: "Skincare"
        },
        {
            id: 7,
            image: exercise,
            description: "Exercise"
        },
        {
            id: 8,
            image: hairRemoval,
            description: "Hair removal"
        }
    ]

    return (
        <Aux>
            <p className={classes.areasHeading}>Popular areas</p>
            <div className={classes.Areas}>
                {areas.map(area => (
                    <Area type="button" key={area.id} image={area.image} description={area.description}/>
                ))}
                <Area type="moreButton" description="More..."/>
            </div>
        </Aux>
    );
};

export default Areas;