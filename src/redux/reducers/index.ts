import { combineReducers } from 'redux';
import pokemonApi from './pokemonApi';
import speciesEvolutionApi from './speciesEvolutionApi';

export default combineReducers({ pokemonApi, speciesEvolutionApi });
