import { PokemonInfo, PokemonSpecies } from './PokemonData';
import { EvolutionObj } from '../services/evolutionArray';

export interface ApiState {
  readonly url: { previous?: string; actual: string; next?: string };
  readonly data: PokemonInfo[];
  readonly loading: boolean;
  readonly error: Error | null;
}

export interface SpeciesEvolutionState {
  readonly species?: PokemonSpecies;
  readonly evolutionChain?: EvolutionObj[];
  readonly loading: boolean;
  readonly error: Error | null;
  readonly slider: { actualPokemonId?: number; actualIndex?: number };
}
