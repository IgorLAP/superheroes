import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import NotFound from './components/NotFound';
import Hero from './components/Hero';

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