import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './Home.module.css';
import phonebook from 'images/phonebook.png';
import { selectAuthenticated } from 'redux/auth/auth.selectors';

export const Home = () => {
  const authenticated = useSelector(selectAuthenticated);
  const path = authenticated ? 'contacts' : 'login';

  return (
    <div className={css.Container}>
      <h2>Welcome to Phonebook</h2>
      <img src={phonebook} alt=""></img>
      <p>Here you can save your contacts</p>
      <Link to={path}>Try it now !</Link>
    </div>
  );
};
