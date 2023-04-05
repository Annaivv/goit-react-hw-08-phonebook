import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #2a363b;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }
`;
