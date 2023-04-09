import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { Stack, Typography } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={1}
      sx={{
        width: '100%',
        maxWidth: 380,
        bgcolor: 'background.paper',
        m: '0 auto',
      }}
    >
      {contacts.map(contact => (
        <Typography variant="subtitle1" key={contact.id}>
          {contact.name}: {contact.number}
        </Typography>
      ))}
    </Stack>
  );
};
