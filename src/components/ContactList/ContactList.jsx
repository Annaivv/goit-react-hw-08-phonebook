import { useSelector } from 'react-redux';
import { ItemsList, ListItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

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
