import { Button } from '@mui/material';
import { Wrapper, UserWelcome } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <UserWelcome>Welcome, {name}</UserWelcome>
      <Button variant="contained" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
    </Wrapper>
  );
};
