/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getSpeciesEvolutionAPI,
  updateIndexAndId,
  saveActualId,
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
import createActualIndex from '../services/createActualIndex';

interface StateProps {
  evolutionChain?: EvolutionObj[];
  loading: boolean;
  actualPokemonId?: number;
  actualIndex?: number;
}

interface DispatchProps {
  getSpeciesEvolutionAPI: (url: string) => void;
  saveActualId: (id: number) => void;
  updateIndexAndId: (index: number) => void;
}

interface OwnProps {
  match: { params: { id: string } };
  history: History;
}

type Props = StateProps & DispatchProps & OwnProps;

const PokemonEvolution = ({
  getSpeciesEvolutionAPI,
  match,
  evolutionChain,
  loading,
  saveActualId,
  actualPokemonId,
  actualIndex,
  updateIndexAndId,
  history,
}: Props) => {
  const { id } = match.params;

  useEffect(() => {
    console.log('primeiro effect');
    if (!actualPokemonId) saveActualId(Number(id));
  }, []);

  useEffect(() => {
    console.log('segundo effect');
    getSpeciesEvolutionAPI(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  }, []);

  useEffect(() => {
    console.log('terceiro effect');
    history.push(`/details/pokemon/${actualPokemonId}`);
  }, [actualPokemonId, history]);

  useEffect(() => {
    console.log('quarto effect');
    const index = createActualIndex(evolutionChain!, Number(id)!);
    if (index !== -1) updateIndexAndId(index!);
  }, [id]);

  if (loading) {
    return (
      <Loading display="flex" alignItems="center" justifyContent="center">
        {console.log('render loading')}
        <h3>Getting Pokémons...</h3>
      </Loading>
    );
  }
  if (evolutionChain)
    return (
      <>
        <EvolutionContainer>
          {console.log('render evolution')}
          <EvolutionButton
            type="button"
            onClick={() => updateIndexAndId(actualIndex! - 1)}
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
                      (100 / evolutionChain!.length) * Math.floor(evolutionChain!.length / 2)
                    )}%)`
                  : `translateX(${-(actualIndex! * (100 / evolutionChain!.length) -25)}%)`
              }
            >
              {evolutionChain?.map((pokemonIdArray) => (
                <PokemonCardEvolutionStyle
                  to={`/details/pokemon/${pokemonIdArray.id}`}
                  opacity={id === pokemonIdArray.id ? 1 : 0.5}
                  scale={id === pokemonIdArray.id ? `scale(${1.1})` : `scale(${0.9})`}
                  filter={id === pokemonIdArray.id ? "none" : `blur(${3}px)`}
                  key={pokemonIdArray.id}
                >
                  <PokemonCard uniquePokemonData={pokemonIdArray} />
                </PokemonCardEvolutionStyle>
              ))}
            </PokemonCardContainerWrapper>
          </PokemonCardSlider>

          <EvolutionButton
            type="button"
            onClick={() => updateIndexAndId(actualIndex! + 1)}
            disabled={actualIndex! === evolutionChain!.length - 1}
          >
            <ArrowNext
              fill={actualIndex! !== evolutionChain!.length - 1 ? 'black' : 'gray'}
            />
          </EvolutionButton>
        </EvolutionContainer>
      </>
    );
  return <>{console.log('render nada')}</>;
};

const mapState = (state: AppState) => ({
  evolutionChain: state.speciesEvolutionApi.evolutionChain,
  loading: state.speciesEvolutionApi.loading,
  actualPokemonId: state.speciesEvolutionApi.slider.actualPokemonId,
  actualIndex: state.speciesEvolutionApi.slider.actualIndex,
});

const mapDispatch = {
  getSpeciesEvolutionAPI,
  updateIndexAndId,
  saveActualId,
};

export default connect(mapState, mapDispatch)(PokemonEvolution);
