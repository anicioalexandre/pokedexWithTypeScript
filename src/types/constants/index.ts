import { PokemonInfo, PokemonSpecies } from '../PokemonData';
import { EvolutionObj } from '../../services/evolutionArray';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_EVOLUTION_API = 'REQUEST_EVOLUTION_API';
export const REQUEST_POKEMON_INFO_API = 'REQUEST_POKEMON_INFO_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_SPECIES_SUCCESS = 'REQUEST_SPECIES_SUCCESS';
export const REQUEST_EVOLUTION_SUCCESS = 'REQUEST_EVOLUTION_SUCCESS';
export const REQUEST_POKEMON_INFO_SUCCESS = 'REQUEST_POKEMON_INFO_SUCCESS';
export const REQUEST_API_FAILURE = 'REQUEST_API_FAILURE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const SAVE_NEXT_PREVIOUS_URL = 'SAVE_NEXT_PREVIOUS_URL';
export const SAVE_ID = 'SAVE_ID';
export const UPDATE_INDEX_AND_ID = 'UPDATE_INDEX_AND_ID';

export interface RequestAction {
  type: typeof REQUEST_API;
}

export interface RequestEvolutionAction {
  type: typeof REQUEST_EVOLUTION_API;
}

export interface RequestPokemonInfoAction {
  type: typeof REQUEST_POKEMON_INFO_API;
}

export interface SuccessAction {
  type: typeof REQUEST_API_SUCCESS;
  info: PokemonInfo;
}

export interface SpeciesSuccessAction {
  type: typeof REQUEST_SPECIES_SUCCESS;
  species: PokemonSpecies;
}

export interface EvolutionSuccessAction {
  type: typeof REQUEST_EVOLUTION_SUCCESS;
  evolutionChain: EvolutionObj[];
}

export interface PokemonInfoSuccessAction {
  type: typeof REQUEST_POKEMON_INFO_SUCCESS;
  info: PokemonInfo | PokemonSpecies;
}

export interface FailureAction {
  type: typeof REQUEST_API_FAILURE;
  error: Error;
}

export interface SaveNextPreviousUrl {
  type: typeof SAVE_NEXT_PREVIOUS_URL;
  previous?: string;
  next?: string;
}

export interface PreviousPageApi {
  type: typeof PREVIOUS_PAGE;
  previous?: string;
}

export interface NextPageApi {
  type: typeof NEXT_PAGE;
  next?: string;
}

export interface SaveActualId {
  type: typeof SAVE_ID;
  id: number;
}

export interface UpdateIndex {
  type: typeof UPDATE_INDEX_AND_ID;
  index: number;
}

export type RequestApiActions =
  | RequestAction
  | RequestEvolutionAction
  | RequestPokemonInfoAction
  | SaveNextPreviousUrl
  | SuccessAction
  | SpeciesSuccessAction
  | EvolutionSuccessAction
  | PokemonInfoSuccessAction
  | FailureAction;
export type AppInteractions = NextPageApi | PreviousPageApi | SaveActualId | UpdateIndex;
export type AppActions = RequestApiActions | AppInteractions;
