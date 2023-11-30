import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';
import { selectAuthenticated } from 'redux/auth/auth.selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthenticated);

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
          <UserMenu />
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
