import { Header, StyledLink, HeaderNav } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <HeaderNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </HeaderNav>
    </Header>
  );
};
