import React from 'react';
import { HeaderStyle } from '../styles/Header';
import Home from '../localdata/Home';
import { HomeButton } from '../styles/Header';

const Header: React.FC = () => (
  <HeaderStyle>
    <h1>Pokédex</h1>
    <HomeButton to="/#/">
      <Home />
    </HomeButton>
  </HeaderStyle>
);

export default Header;
