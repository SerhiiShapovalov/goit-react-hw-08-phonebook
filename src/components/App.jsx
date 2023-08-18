import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import {
  useDispatch,
  // , useSelector
} from 'react-redux';
// import { fetchContacts } from '../redux/contacts/operations';
// import { getContacts } from '../redux/contacts/selectors';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import AppBar from '../components/AppBar/AppBar';
// import css from './App.module.css';
// import { useEffect } from 'react';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Сontacts'));

function App() {
  // const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
      {/* <div className={css.container}>
        <div className={css.wrapper}>
          <AppBar />

          <h1 className={css.title}>Phonebook </h1>
          <ContactForm />

          <h2 className={css.subtitle}>Contacts</h2>
          <Filter />
          {contacts.length > 0 && <ContactList />}
        </div>
      </div> */}
    </Routes>
  );
}

export default App;
