import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <nav>
      <NavLink
        className={`${css.link} ${location.pathname === '/' ? css.active : ''}`}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={`${css.link} ${
            location.pathname === '/contacts' ? css.active : ''
          }`}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
