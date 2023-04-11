import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button, Typography } from '@mui/material';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="subtitle1" key={contact.id}>
        {contact.name}: {contact.number}
      </Typography>
      <Button variant="outlined" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};
