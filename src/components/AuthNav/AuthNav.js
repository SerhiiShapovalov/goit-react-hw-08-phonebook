import { NavLink, useLocation } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const location = useLocation();

  return (
    <div>
      <NavLink
        className={`${css.link} ${
          location.pathname === '/register' ? css.active : ''
        }`}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={`${css.link} ${
          location.pathname === '/login' ? css.active : ''
        }`}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};
