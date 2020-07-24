import React from 'react';
import App from '../App';
import renderWithRedux from '../helpers/renderWIthRedux';
import renderWithRouter from '../helpers/renderWithRouter';

describe('teste do App', () => {
  it('rederizando o componente App', () => {
    const { getByText } = renderWithRedux(renderWithRouter(<App />, ['/']));
    expect(getByText('Ivysaur')).toBeInTheDocument();
  });
});
