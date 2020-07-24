import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSpeciesEvolutionAPI } from '../redux/actions';
import {
  Loading,
  PokemonCardEvolutionStyle,
  PokemonCardContainer,
} from '../styles';
import PokemonCard from '../components/PokemonCard';

const PokemonDetails = ({
  getEvolutionChain,
  match,
  evolutionChain,
  loading,
}) => {
  useEffect(() => {
    const { id } = match.params;
    getEvolutionChain(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  }, [getEvolutionChain, match.params]);

  if (loading) {
    return (
      <Loading display="flex" alignItems="center" justifyContent="center">
        <h3>Getting Pokémons...</h3>
      </Loading>
    );
  }
  return (
    <PokemonCardContainer
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      {evolutionChain?.map((pokemonIdArray) => (
        <PokemonCardEvolutionStyle key={pokemonIdArray.id}>
          <PokemonCard uniquePokemonData={pokemonIdArray} />
        </PokemonCardEvolutionStyle>
      ))}
    </PokemonCardContainer>
  );
};

const mapState = (state) => ({
  evolutionChain: state.speciesEvolutionApi.evolutionChain,
  loading: state.speciesEvolutionApi.loading,
  actualPokemonId: state.speciesEvolutionApi.actualPokemonId,
});

const mapDispatch = {
  getEvolutionChain: getSpeciesEvolutionAPI,
};

export default connect(mapState, mapDispatch)(PokemonDetails);
