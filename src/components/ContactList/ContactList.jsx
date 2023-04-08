import { useSelector } from 'react-redux';
import { ItemsList, ListItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { selectAllContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ItemsList>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Contact contact={contact} />
        </ListItem>
      ))}
    </ItemsList>
  );
};
