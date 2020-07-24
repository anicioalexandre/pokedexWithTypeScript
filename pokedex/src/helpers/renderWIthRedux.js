import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../redux/reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducers, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

export default renderWithRedux;
