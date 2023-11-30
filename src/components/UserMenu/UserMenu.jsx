import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth/auth.selectors';
import { logoutThunk } from 'redux/auth/auth.services';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  return (
    <div className={css.UserMenu}>
      <span>Hello, {userData.email}</span>
      <button onClick={() => dispatch(logoutThunk())}>Log out</button>
    </div>
  );
};
