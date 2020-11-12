import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/headers';
import Details from './pages/details';
import Main from './pages/main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/perfis/:id" component={Details}/>
            {/* <Route exact path="/" component={Header, Main}/> */}
        </Switch>
    </BrowserRouter>
);
    


export default Routes;