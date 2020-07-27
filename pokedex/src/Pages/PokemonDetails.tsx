import React from 'react';
import PokemonEvolution from '../components/PokemonEvolution';
import { RouteComponentProps } from 'react-router';

const PokemonDetails = ({ match, history }: RouteComponentProps) => (
  <>
    <PokemonEvolution match={match} history={history} />
  </>
);

export default PokemonDetails;
