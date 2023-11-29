import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.Navigation}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          borderBottom: isActive ? 'solid #1ebd21' : '',
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        style={({ isActive }) => ({
          borderBottom: isActive ? 'solid #1ebd21' : '',
        })}
      >
        Contacts
      </NavLink>
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
    </nav>
  );
};
