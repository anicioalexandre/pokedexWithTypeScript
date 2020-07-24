import { PokemonEvolution } from '../types/PokemonData';
import getPokemonId from './getPokemonId';

export interface EvolutionObj {
  name: string;
  id: string;
  types?: [];
}

const createEvolutionArray = (
  evolutionChainData: PokemonEvolution
) => {
  let evolutionArray = [
    {
      name: evolutionChainData.chain.species.name,
      id: getPokemonId(evolutionChainData.chain.species.url),
    },
  ];
  evolutionChainData.chain.evolves_to.forEach((evolution) => {
    evolutionArray = [
      ...evolutionArray,
      {
        name: evolution.species.name,
        id: getPokemonId(evolution.species.url),
      },
    ];
    if (evolution.evolves_to.length > 0) {
      evolutionArray = [
        ...evolutionArray,
        {
          name: evolution.evolves_to[0].species.name,
          id: getPokemonId(evolution.evolves_to[0].species.url),
        },
      ];
    }
  });
  return evolutionArray;
};

export default createEvolutionArray;
