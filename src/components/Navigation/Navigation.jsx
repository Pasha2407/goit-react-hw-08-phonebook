import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import css from './Navigation.module.css';
import { selectAuthenticated, selectUserData } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/services';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  return (
    <nav className={css.Navigation}>
      <section>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            borderBottom: isActive ? 'solid #1ebd21' : '',
          })}
        >
          Home
        </NavLink>

        {authenticated && (
          <NavLink
            to="/contacts"
            style={({ isActive }) => ({
              borderBottom: isActive ? 'solid #1ebd21' : '',
            })}
          >
            Contacts
          </NavLink>
        )}
      </section>
      <section>
        {authenticated ? (
          <div>
            <span>Hello, {userData.name}</span>{' '}
            <button onClick={() => dispatch(logoutThunk())}>Log out</button>
          </div>
        ) : (
          <>
            <NavLink
              to="/register"
              style={({ isActive }) => ({
                borderBottom: isActive ? 'solid #1ebd21' : '',
              })}
            >
              Sign up
            </NavLink>
            <NavLink
              to="/login"
              style={({ isActive }) => ({
                borderBottom: isActive ? 'solid #1ebd21' : '',
              })}
            >
              Log in
            </NavLink>
          </>
        )}
      </section>
    </nav>
  );
};
