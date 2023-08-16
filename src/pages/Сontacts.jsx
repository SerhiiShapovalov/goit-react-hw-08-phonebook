// import Container from 'components/Container';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
// import Message from 'components/Message';
import { fetchContacts } from 'redux/contacts/operations';
import AddButton from 'components/AddButton';

function ContactsPage() {
  const { data: contacts } = fetchContacts();

  return (
    <Container title="Contacts">
      <AddButton text="Add new contact" />
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
}

export default ContactsPage;
