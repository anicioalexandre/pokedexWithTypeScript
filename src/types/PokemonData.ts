/* eslint-disable camelcase */
interface BaseStat {
  base_stat: number;
  stat: { name: string };
}

export interface Types {
  type: { name: string };
}

export interface AllPokemonResultsData {
  name: string;
  url: string;
}

export interface AllPokemonsData {
  count: number;
  previous?: string;
  next?: string;
  results: AllPokemonResultsData[];
}

export interface PokemonInfo {
  id: number;
  name: string;
  stats?: BaseStat[];
  types: Types[];
}

export interface FlavorTextEntries {
  flavor_text: string;
  language: { name: string; url: string };
  version: { name: string; url: string };
}

export interface PokemonSpecies {
  capture_rate: number;
  evolution_chain: { url: string };
  flavor_text_entries: FlavorTextEntries[];
  habitat: { name: string };
  shape: { name: string };
}

interface PokemonChain {
  evolves_to: any[];
  species: { name: string; url: string };
}

export interface PokemonEvolution {
  chain: { evolves_to: PokemonChain[]; species: { name: string; url: string } };
}
