import styled, { keyframes } from 'styled-components';
import { flexbox, FlexboxProps, layout, LayoutProps } from 'styled-system';
import { Link, LinkProps } from 'react-router-dom';

type AllStyledTypes = LayoutProps & FlexboxProps;
type Animation = { animation: string };

export const PokemonCardContainer = styled.div<AllStyledTypes>`
  ${layout}
  ${flexbox}
  margin:auto;
  padding: 3vh;
`;

export const PokemonCardStyle = styled(Link)<LinkProps>`
  align-items: center;
  background: linear-gradient(
    to top,
    #212121 20%,
    #c4c4c4 20% 80%,
    #212121 80%
  );
  border-radius: 9px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 250px;
  margin: 5px;
  text-decoration: none;
  width: 200px;
  ${layout}
`;

export const PrevNextButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px;
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(147, 149, 150, 0.7),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
    
  50% {
    box-shadow: 0 0 0 12px rgba(42, 42, 43, 0),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
    
  100% {
    box-shadow: 0 0 0 0 rgba(147, 149, 150, 0.7),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const PrevNextButton = styled.button<Animation>`
  background: #c4c4c4;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  height: 100px;
  outline: none;
  width: 100px;
  &:hover {
    animation-play-state: ${(props) => props.animation};
    animation-name: ${pulse};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;
