import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_FAILURE,
  NEXT_PAGE,
  AppActions,
  SAVE_NEXT_PREVIOUS_URL,
  PREVIOUS_PAGE,
} from '../../types/constants';
import { ApiState } from '../../types/ApiState';

const INITIAL_STATE: ApiState = {
  url: {
    previous: undefined,
    actual: 'https://pokeapi.co/api/v2/pokemon',
    next: undefined,
  },
  data: [],
  loading: false,
  error: null,
};

const pokemonApi = (state = INITIAL_STATE, action: AppActions): ApiState => {
  switch (action.type) {
    case REQUEST_API:
      return { ...state, loading: true };
    case REQUEST_API_SUCCESS:
      return { ...state, loading: false, data: [...state.data, action.info] };
    case REQUEST_API_FAILURE:
      return { ...state, loading: false, error: action.error };
    case SAVE_NEXT_PREVIOUS_URL:
      return {
        ...state,
        url: { ...state.url, previous: action.previous, next: action.next },
      };
    case PREVIOUS_PAGE:
      if (action.previous) return { ...state, data: [], url: { ...state.url, actual: action.previous } };
      return state;
    case NEXT_PAGE:
      if (action.next) return { ...state, data: [], url: { ...state.url, actual: action.next } };
      return state;
    default:
      return state;
  }
};

export default pokemonApi;
