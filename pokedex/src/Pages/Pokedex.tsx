/* eslint-disable react/prefer-stateless-function */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/constants';
import { AppState } from '../redux/store';
import { PokemonInfo } from '../types/PokemonData';
import { PokemonCardStyle, PokemonCardContainer } from '../styles/Pokedex';
import PreviousNext from '../components/PreviousNext';
import { getAPI, saveActualId } from '../redux/actions';
import PokemonCard from '../components/PokemonCard';
import { Loading } from '../styles/Components';

interface StateProps {
  actualUrlPokemon: string;
  pokemonData: PokemonInfo[];
  loading: boolean;
}

interface DispatchProps {
  getPokemons: (actualUrlPokemon?: string) => void;
  saveActualId: (id: number) => void;
}

type Props = StateProps & DispatchProps;

const Pokedex: React.FC<Props> = ({
  getPokemons,
  actualUrlPokemon,
  pokemonData,
  loading,
  saveActualId,
}) => {
  useEffect(() => {
    if (pokemonData.length === 0) getPokemons(actualUrlPokemon);
  }, [actualUrlPokemon, pokemonData, getPokemons]);

  if (loading) {
    return (
      <Loading display="flex" alignItems="center" justifyContent="center">
        <h3>Getting Pokémons...</h3>
      </Loading>
    );
  }
  // if (error)
  //   return (
  //     <PokemonCardContainer display="flex" alignItems="center" justifyContent="center">
  //       <h3>{error}</h3>
  //     </PokemonCardContainer>
  //   );
  return (
    <>
      <PokemonCardContainer
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {pokemonData.map((uniquePokemonData) => (
          <PokemonCardStyle
            onClick={() => saveActualId(uniquePokemonData.id)}
            to={`/details/pokemon/${uniquePokemonData.id}`}
            key={uniquePokemonData.id}
          >
            <PokemonCard uniquePokemonData={uniquePokemonData} />
          </PokemonCardStyle>
        ))}
      </PokemonCardContainer>
      <PreviousNext />
    </>
  );
};

const mapState = (state: AppState) => ({
  actualUrlPokemon: state.pokemonApi.url.actual,
  pokemonData: state.pokemonApi.data,
  loading: state.pokemonApi.loading,
});

const mapDispatch = (
  dispatch: ThunkDispatch<any, any, AppActions>
): DispatchProps => ({
  getPokemons: bindActionCreators(getAPI, dispatch),
  saveActualId: bindActionCreators(saveActualId, dispatch)
});

export default connect(mapState, mapDispatch)(Pokedex);
