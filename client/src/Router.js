import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AccountScreen from './components/AccountScreen';
import CategoryScreen from './components/CategoryScreen';
import IngredientsScreen from './components/IngredientsScreen';
import RecipeList from './components/RecipeList';
import RecipeScreen from './components/RecipeScreen';
import PrimaryNav from './components/PrimaryNav';
import SecondaryNav from './components/PrimaryNav';

let Router = () =>
    <div>
      <SecondaryNav />
        <Switch>
            <Route path="/account" component={AccountScreen} />
            <Route path="/categories" component={CategoryScreen} />
            <Route path="/ingredients" component={IngredientsScreen} />
            <Route path="/recipes" component={RecipeList} />
            <Route path="/#/recipes/:recipe" component={RecipeScreen} />
        </Switch>
        <PrimaryNav />
  </div>;

export default Router;

