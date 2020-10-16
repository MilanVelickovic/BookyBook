import React from 'react';

import * as pages from '../Pages/pages';

import Aux from '../hoc/Aux';

import Header from '../components/Header/Header';
import Submenu from '../components/Submenu/Submenu';
import CompanyDetails from '../components/CompanyDetails/CompanyDetails';

const LandingPage = () => (
    <Aux>
        <Header page={pages.COMPANY_PROFILE}/>
        <Submenu/>
        <CompanyDetails/>
    </Aux>
);

export default LandingPage;