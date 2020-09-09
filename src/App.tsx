import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './Routes';

const App:React.FC = () => (
  <div>
    <GlobalStyle />
    <Header />
    <Routes />
  </div>
);

export default App;
