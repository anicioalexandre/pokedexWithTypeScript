/* eslint-disable camelcase */
import { Dispatch } from 'redux';
import {
  REQUEST_API,
  REQUEST_EVOLUTION_API,
  REQUEST_API_SUCCESS,
  REQUEST_SPECIES_SUCCESS,
  REQUEST_EVOLUTION_SUCCESS,
  REQUEST_API_FAILURE,
  AppActions,
  SAVE_NEXT_PREVIOUS_URL,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SAVE_ID,
  UPDATE_INDEX,
} from '../../types/constants';
import {
  PokemonInfo,
  AllPokemonsData,
  PokemonSpecies,
  PokemonEvolution,
} from '../../types/PokemonData';
import fecthFunction from '../../services/fetchFunction';
import createEvolutionArray from '../../services/evolutionArray';

const requestAPI = (): AppActions => ({
  type: REQUEST_API,
});

const requestEvolutionAPI = (): AppActions => ({
  type: REQUEST_EVOLUTION_API,
});

const requestAPISuccess = ({
  id,
  name,
  species,
  stats,
  types,
}: PokemonInfo): AppActions => ({
  type: REQUEST_API_SUCCESS,
  info: { id, name, species, stats, types },
});

const requestSpeciesSuccess = ({
  capture_rate,
  evolution_chain,
  flavor_text_entries,
  habitat,
  shape,
}: PokemonSpecies): AppActions => ({
  type: REQUEST_SPECIES_SUCCESS,
  species: {
    capture_rate,
    evolution_chain,
    flavor_text_entries,
    habitat,
    shape,
  },
});

const requestEvolutionSuccess = (evolutionChain: PokemonEvolution): AppActions => ({
  type: REQUEST_EVOLUTION_SUCCESS,
  evolutionChain: createEvolutionArray(evolutionChain),
});

const requestAPIFailure = (error: Error): AppActions => ({
  type: REQUEST_API_FAILURE,
  error,
});

export const previousPageApi = (previous?: string): AppActions => ({
  type: PREVIOUS_PAGE,
  previous,
});

export const nextPageApi = (next?: string): AppActions => ({
  type: NEXT_PAGE,
  next,
});

const saveNextPreviousUrl = (previous?: string, next?: string): AppActions => ({
  type: SAVE_NEXT_PREVIOUS_URL,
  previous,
  next,
});

export const getAPI = (url?: string) => (dispatch: Dispatch<AppActions>) => {
  dispatch(requestAPI());
  return fecthFunction(url!).then(
    (allPokemonsData: AllPokemonsData) => {
      dispatch(
        saveNextPreviousUrl(
          allPokemonsData.previous as string,
          allPokemonsData.next as string,
        ),
      );
      allPokemonsData.results.map((pokemonData) =>
        fecthFunction(pokemonData.url).then(
          (pokemonInfo: PokemonInfo) => dispatch(requestAPISuccess(pokemonInfo)),
          (error: Error) => dispatch(requestAPIFailure(error)),
        ),
      );
    },
    (error: Error) => dispatch(requestAPIFailure(error)),
  );
};

export const getSpeciesEvolutionAPI = (url: string) => (dispatch: Dispatch<AppActions>) => {
  dispatch(requestEvolutionAPI());
  return fecthFunction(url).then(
    (pokemonSpecies: PokemonSpecies) => {
      dispatch(requestSpeciesSuccess(pokemonSpecies));
      return fecthFunction(pokemonSpecies.evolution_chain.url).then(
        (pokemonEvolutionChain: PokemonEvolution) => {
          dispatch(requestEvolutionSuccess(pokemonEvolutionChain));
        },
        (error: Error) => dispatch(requestAPIFailure(error)),
      );
    },
    (error: Error) => dispatch(requestAPIFailure(error)),
  );
};

export const selectedPokemon = (id: number): AppActions => ({
  type: SAVE_ID,
  id,
});

export const updateIndex = (index: number, pokemonId: number): AppActions => ({
  type: UPDATE_INDEX,
  index,
  pokemonId,
});
