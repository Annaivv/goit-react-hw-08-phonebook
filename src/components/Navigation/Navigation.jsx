import { StyledLink } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      {/* <StyledLink to="/">Home</StyledLink> */}
      {isLoggedIn ? (
        <StyledLink to="/contacts">Contacts</StyledLink>
      ) : (
        <StyledLink to="/">Home</StyledLink>
      )}
    </nav>
  );
};
