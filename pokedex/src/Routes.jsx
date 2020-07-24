import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Pokedex from './Pages/Pokedex';
import PokemonDetails from './Pages/PokemonDetails';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          path="/details/pokemon/:id"
          render={(props) => <PokemonDetails {...props}/>}
        />
        <Route exact path="/" component={Pokedex} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
