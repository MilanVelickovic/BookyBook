import React from 'react';

import * as pages from '../Pages/pages';

import Aux from '../hoc/Aux';

import Header from '../components/Header/Header';
import SearchHolder from '../components/SearchHolder/SearchHolder';
import Results from '../components/Results/Results';
import Footer from '../components/Footer/Footer';

const SearchResults = () => (
    <Aux>
        <Header page={pages.SEARCH_RESULTS}/>
        <SearchHolder/>
        <Results/>
    </Aux>
);

export default SearchResults;