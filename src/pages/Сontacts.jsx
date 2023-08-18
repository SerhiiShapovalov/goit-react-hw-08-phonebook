import Filter from '../components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import {
  getContacts,
  // , selectLoading
} from '../redux/contacts/selectors';
import ContactList from '../components/ContactList/ContactList';
import { fetchContacts } from '../redux/contacts/operations';
import ContactForm from '../components/ContactForm/ContactForm';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  // const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </>
  );
}
