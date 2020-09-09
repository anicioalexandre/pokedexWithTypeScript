import styled from 'styled-components';
import { FlexboxProps, LayoutProps } from 'styled-system';

type AllStyledTypes = LayoutProps & FlexboxProps;
type Background = { background: string };
type Animation = { animation: string };
type Transform = { transform?: string };
type Opacity = { opacity?: string };
type Scale = { scale?: any };

export const TypeButton = styled.div<Background>`
  align-items: center;
  background: #${(props) => props.background};
  border-radius: 15px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 30px;
  justify-content: center;
  margin: 2px;
  width: 90px;
`;

export const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  padding: 20px;
`;

