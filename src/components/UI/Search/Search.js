import React, { useState } from 'react';

import * as pages from '../../../Pages/pages';

import AutoSuggestion from './AutoSuggestion/AutoSuggestion';

import classes from './Search.module.css';

import searchIcon from '../../../assets/Search/search.svg';
import locationIcon from '../../../assets/Search/location.svg';

const Search = (props) => {

    const[showAutoSuggestion, setShowAutoSuggestion] = useState(false);

    let attachedClassesForSearch = [classes.Search];
    let attachedClassesForPart = [classes.part];

    if (props.forPage === pages.SEARCH_RESULTS) {
        attachedClassesForSearch.push(classes.extendedSearch);
        attachedClassesForPart.push(classes.extendedPart);
    }

    return (
        <form className={attachedClassesForSearch.join(' ')}>
            <div className={classes.part}>
                <img src={searchIcon} alt="Search Icon"/>
                <input type="text" placeholder="Write service, performer or company"/>
            </div>    
            <div className={attachedClassesForPart.join(' ')}>
                <img src={locationIcon} alt="Location Icon"/>
                <input type="text" onClick={() => setShowAutoSuggestion(!showAutoSuggestion)} placeholder="Write city or area"/>
                {showAutoSuggestion ? <AutoSuggestion/> : null}
            </div>
            <button type="submit" value="submit">Search</button>
        </form>
    );
};

export default Search;