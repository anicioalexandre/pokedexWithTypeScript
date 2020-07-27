import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyle = styled.header`
  align-items: center;
  background: #212121;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 15vh;
  justify-content: space-around;
`;

export const HomeButton = styled(Link)`
  align-items: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  outline: none;
  width: 30px;
`;
