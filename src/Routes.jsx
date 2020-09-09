import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokedex from './Pages/Pokedex';
import PokemonDetails from './Pages/PokemonDetails';

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/details/pokemon/:id"
        render={(props) => <PokemonDetails {...props} />}
      />
      <Route exact path="/" component={Pokedex} />
    </Switch>
  );
};

export default Routes;
