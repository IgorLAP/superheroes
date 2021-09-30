import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import NotFound from './components/pages/NotFound';
import Hero from './components/pages/Hero';

export default ()=>{
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/search">
                <Search />
            </Route>
            <Route exact path="/hero/:id">
                <Hero />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}