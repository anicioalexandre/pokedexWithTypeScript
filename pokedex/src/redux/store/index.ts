import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootCombiner from '../reducers';
import { AppActions } from '../../types/constants';

export type AppState = ReturnType<typeof rootCombiner>;

const store = createStore(
  rootCombiner,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)),
);

export default store;
