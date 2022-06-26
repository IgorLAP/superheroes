import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Hero from './pages/Hero';

export default () => {
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