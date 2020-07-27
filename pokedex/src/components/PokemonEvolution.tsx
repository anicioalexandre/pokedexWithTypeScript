import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getSpeciesEvolutionAPI,
  updateIndex,
  selectedPokemon,
} from '../redux/actions';
import PokemonCard from './PokemonCard';
import ArrowBack from '../localdata/ArrowBack';
import ArrowNext from '../localdata/ArrowNext';
import {
  PokemonCardSlider,
  PokemonCardContainerWrapper,
  PokemonCardEvolutionStyle,
  EvolutionContainer,
  EvolutionButton,
} from '../styles/PokemonEvolution';
import { Loading } from '../styles/Components';
import { AppState } from '../redux/store';
import { EvolutionObj } from '../services/evolutionArray';
import { History } from 'history';

interface StateProps {
  evolutionChain?: EvolutionObj[];
  loading: boolean;
  actualPokemonId?: number;
  actualIndex?: number;
}

interface DispatchProps {
  getEvolutionChain: (url: string) => void;
  saveActualId: (id: number) => void;
  updateIndex: (index: number) => void;
}
type TParams = { id: string };
interface OwnProps {
  match: { params: { id: string } };
  history: History;
}

type Props = StateProps & DispatchProps & OwnProps;

const PokemonEvolution = ({
  getEvolutionChain,
  match,
  evolutionChain,
  loading,
  saveActualId,
  actualPokemonId,
  actualIndex,
  updateIndex,
  history,
}: Props) => {
  const { id } = match.params;
  useEffect(() => {
    if (!actualPokemonId) saveActualId(Number(id));
  }, []);
  useEffect(() => {
    getEvolutionChain(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    console.log('effect');
  }, []);

  useEffect(() => {
    history.push(`/details/pokemon/${actualPokemonId}`);
  }, [actualPokemonId, history]);

  // useEffect(() => {
  //   if (Number(id) !== actualIndex) updateIndex(Number(id) -1)
  //   console.log('mudei id');
  // }, [id])

  // VER EXAUSTHIVE DEPS

  if (loading) {
    return (
      <Loading display="flex" alignItems="center" justifyContent="center">
        <h3>Getting Pokémons...</h3>
      </Loading>
    );
  }
  if (evolutionChain)
    return (
      <>
        <EvolutionContainer>
          <EvolutionButton
            type="button"
            onClick={() => updateIndex(actualIndex! - 1)}
            disabled={actualIndex === 0}
          >
            <ArrowBack fill={actualIndex !== 0 ? 'black' : 'gray'} />
          </EvolutionButton>
          <PokemonCardSlider
            alignItems="center"
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
          >
            <PokemonCardContainerWrapper
              display="flex"
              flexDirection="row"
              flexWrap="nowrap"
              justifyContent="center"
              transform={
                evolutionChain!.length % 2 !== 0
                  ? `translateX(${-(
                      actualIndex! * (100 / evolutionChain!.length) -
                      (100 / evolutionChain!.length) *
                        Math.floor(evolutionChain!.length / 2)
                    )}%)`
                  : `translateX(${-(
                      actualIndex! * (100 / evolutionChain!.length) -
                      38
                    )}%)`
              }
            >
              {evolutionChain?.map((pokemonIdArray) => (
                <PokemonCardEvolutionStyle
                  to={`/details/pokemon/${pokemonIdArray.id}`}
                  opacity={id === pokemonIdArray.id ? 1 : 0.5}
                  scale={
                    actualPokemonId === Number(pokemonIdArray.id)
                      ? `scale(${1.1})`
                      : `scale(${0.9})`
                  }
                  key={pokemonIdArray.id}
                >
                  <PokemonCard uniquePokemonData={pokemonIdArray} />
                </PokemonCardEvolutionStyle>
              ))}
            </PokemonCardContainerWrapper>
          </PokemonCardSlider>

          <EvolutionButton
            type="button"
            onClick={() => updateIndex(actualIndex! + 1)}
            disabled={actualIndex! === evolutionChain!.length - 1}
          >
            {console.log(actualIndex! * (100 / evolutionChain!.length))}
            <ArrowNext
              fill={
                actualIndex! !== evolutionChain!.length - 1 ? 'black' : 'gray'
              }
            />
          </EvolutionButton>
        </EvolutionContainer>
      </>
    );
  return (
    <>
      <p>Erro</p>
    </>
  );
};

const mapState = (state: AppState) => ({
  evolutionChain: state.speciesEvolutionApi.evolutionChain,
  loading: state.speciesEvolutionApi.loading,
  actualPokemonId: state.speciesEvolutionApi.slider.actualPokemonId,
  actualIndex: state.speciesEvolutionApi.slider.actualIndex,
});

const mapDispatch = {
  getEvolutionChain: getSpeciesEvolutionAPI,
  updateIndex: updateIndex,
  saveActualId: selectedPokemon,
};

export default connect(mapState, mapDispatch)(PokemonEvolution);
