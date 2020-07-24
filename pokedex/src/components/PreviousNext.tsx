/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { getAPI, nextPageApi, previousPageApi } from '../redux/actions';
import { AppActions } from '../types/constants';
import { AppState } from '../redux/store';
import { PrevNextButtonContainer, PrevNextButton } from '../styles';
import ArrowBack from '../localdata/ArrowBack';
import ArrowNext from '../localdata/ArrowNext';

interface StateProps {
  nextUrlPokemon?: string;
  previousUrlPokemon?: string;
}

interface DispatchProps {
  getPokemons: (nextUrlPokemon?: string) => void;
  nextPage: (nextUrlPokemon?: string) => void;
  previousPage: (previousUrlPokemon?: string) => void;
}

type Props = StateProps & DispatchProps;

const PreviousNext: React.FC<Props> = ({
  getPokemons,
  nextPage,
  nextUrlPokemon,
  previousPage,
  previousUrlPokemon,
}) => (
  <PrevNextButtonContainer>
    <PrevNextButton
      disabled={!previousUrlPokemon}
      type="button"
      onClick={() => {
        previousPage(previousUrlPokemon);
        getPokemons(previousUrlPokemon);
      }}
      animation={previousUrlPokemon ? 'running' : 'paused'}
    >
      <ArrowBack fill={previousUrlPokemon ? 'black' : 'gray'} />
    </PrevNextButton>
    <PrevNextButton
      disabled={!nextUrlPokemon}
      type="button"
      onClick={() => {
        nextPage(nextUrlPokemon);
      }}
      animation={nextUrlPokemon ? 'running' : 'paused'}
    >
      <ArrowNext fill={nextUrlPokemon ? 'black' : 'gray'} />
    </PrevNextButton>
  </PrevNextButtonContainer>
);

const mapState = (state: AppState) => ({
  nextUrlPokemon: state.pokemonApi.url.next,
  previousUrlPokemon: state.pokemonApi.url.previous,
});

const mapDispatch = (
  dispatch: ThunkDispatch<any, any, AppActions>
): DispatchProps => ({
  getPokemons: bindActionCreators(getAPI, dispatch),
  nextPage: bindActionCreators(nextPageApi, dispatch),
  previousPage: bindActionCreators(previousPageApi, dispatch),
});

export default connect(mapState, mapDispatch)(PreviousNext);
