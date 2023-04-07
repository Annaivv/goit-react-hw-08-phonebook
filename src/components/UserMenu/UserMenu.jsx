import { Wrapper, UserWelcome } from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  return (
    <Wrapper>
      <UserWelcome>Welcome, {name}</UserWelcome>
      <button type="button">Logout</button>
    </Wrapper>
  );
};
