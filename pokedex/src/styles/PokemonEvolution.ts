import styled from 'styled-components';
import { flexbox, FlexboxProps, layout, LayoutProps } from 'styled-system';
import { PokemonCardContainer, PokemonCardStyle } from './Pokedex';

type AllStyledTypes = LayoutProps & FlexboxProps;
type Transform = { transform?: string };
type Opacity = { opacity?: number };
type Scale = { scale?: any };
type Filter = { filter?: any };

export const EvolutionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonCardSlider = styled.div<AllStyledTypes>`
  ${layout}
  ${flexbox}
  margin: 0;
  position: relative;
  height: 300px;
  max-height: 350px;
  overflow: hidden;
  width: 75%;
  transition: 0.5s linear;
  @media only screen and (min-width: 968px) {
    width: 40%
  }
`;

export const PokemonCardContainerWrapper = styled(PokemonCardContainer)<Transform>`
  position: absolute;
  transform: ${(props) => props.transform};
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

export const PokemonCardEvolutionStyle = styled(PokemonCardStyle)<Opacity & Scale & Filter>`
  background: linear-gradient(#212121 25%, #c4c4c4 25% 100%);
  height: 200px;
  opacity: ${(props) => props.opacity};
  transform: ${(props) => props.scale};
  filter: ${(props) => props.filter};
  transition: transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

export const EvolutionButton = styled.button`
  background: #C4C4C4;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  height: 180px;
  outline: none;
  width: 40px;
`;
