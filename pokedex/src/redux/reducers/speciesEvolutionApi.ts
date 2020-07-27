import {
  REQUEST_EVOLUTION_API,
  REQUEST_API_FAILURE,
  REQUEST_SPECIES_SUCCESS,
  AppActions,
  REQUEST_EVOLUTION_SUCCESS,
  SAVE_ID,
  UPDATE_INDEX,
} from '../../types/constants';
import { SpeciesEvolutionState } from '../../types/ApiState';
import createActualIndex from '../../services/createActualIndex';

const INITIAL_STATE: SpeciesEvolutionState = {
  species: undefined,
  evolutionChain: undefined,
  loading: false,
  error: null,
  slider: { actualPokemonId: undefined, actualIndex: undefined },
};

const speciesEvolutionApi = (
  state = INITIAL_STATE,
  action: AppActions
): SpeciesEvolutionState => {
  switch (action.type) {
    case REQUEST_EVOLUTION_API:
      return { ...state, loading: true };
    case REQUEST_API_FAILURE:
      return { ...state, loading: false, error: action.error };
    case REQUEST_SPECIES_SUCCESS:
      return { ...state, loading: false, species: action.species };
    case REQUEST_EVOLUTION_SUCCESS:
      const index = createActualIndex(
        action.evolutionChain,
        state.slider.actualPokemonId
      );
      return {
        ...state,
        loading: false,
        evolutionChain: action.evolutionChain,
        slider: { ...state.slider, actualIndex: index },
      };
    case SAVE_ID:
      return {
        ...state,
        slider: { ...state.slider, actualPokemonId: action.id },
      };
    case UPDATE_INDEX:
      if (state.evolutionChain)
        return {
          ...state,
          slider: {
            ...state.slider,
            actualIndex: action.index,
            actualPokemonId: Number(state.evolutionChain[action.index].id),
          },
        };
      return state;
    default:
      return state;
  }
};

export default speciesEvolutionApi;
