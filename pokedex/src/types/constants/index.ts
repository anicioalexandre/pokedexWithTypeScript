import { PokemonInfo, PokemonSpecies } from '../PokemonData';
import { EvolutionObj } from '../../services/evolutionArray';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_EVOLUTION_API = 'REQUEST_EVOLUTION_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_SPECIES_SUCCESS = 'REQUEST_SPECIES_SUCCESS';
export const REQUEST_EVOLUTION_SUCCESS = 'REQUEST_EVOLUTION_SUCCESS';
export const REQUEST_API_FAILURE = 'REQUEST_API_FAILURE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const SAVE_NEXT_PREVIOUS_URL = 'SAVE_NEXT_PREVIOUS_URL';
export const SAVE_ID = 'SAVE_ID';
export const UPDATE_INDEX = 'UPDATE_INDEX';

export interface RequestAction {
  type: typeof REQUEST_API;
}

export interface RequestEvolutionAction {
  type: typeof REQUEST_EVOLUTION_API;
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

export interface updateIndex {
  type: typeof UPDATE_INDEX;
  index: number;
  pokemonId: number;
}

export type RequestApiActions =
  | RequestAction
  | RequestEvolutionAction
  | SaveNextPreviousUrl
  | SuccessAction
  | SpeciesSuccessAction
  | EvolutionSuccessAction
  | FailureAction;
export type AppInteractions = NextPageApi | PreviousPageApi | SaveActualId | updateIndex;
export type AppActions = RequestApiActions | AppInteractions;
