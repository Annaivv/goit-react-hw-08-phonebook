import { useDispatch } from 'react-redux';
import { ContactBlock } from './Contact.styled';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ContactBlock>
      <p>
        <span>{contact.name}</span>
        <span>: </span>
        <span>{contact.number.toString()}</span>
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </ContactBlock>
  );
};
