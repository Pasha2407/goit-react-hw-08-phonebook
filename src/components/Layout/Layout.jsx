import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    <div className={css.Container}>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Phonebook app by Pasha</footer>
    </div>
  );
};
