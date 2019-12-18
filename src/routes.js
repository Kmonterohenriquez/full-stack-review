import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Products from './Components/Products'
import Cart from './Components/Cart'


export default (
    <Switch>
        <Route component={Products} exact path='/'/>
        <Route component={Cart} exact path='/cart'/>
    </Switch>
)