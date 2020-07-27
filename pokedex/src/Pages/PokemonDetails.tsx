import React from 'react';
import PokemonEvolution from '../components/PokemonEvolution';
import { RouteComponentProps } from 'react-router';
import { History } from 'history';

type TParams = { id: string };
interface OwnProps {
  match: { params: { id: string } };
  history: History;
}
type Props = OwnProps;
const PokemonDetails = ({ match, history }: Props) => (
  <>
    <PokemonEvolution match={match} history={history} />
  </>
);

export default PokemonDetails;
