import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

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
    // <List
    //   sx={{
    //     width: '100%',
    //     maxWidth: 400,
    //     bgcolor: 'background.paper',
    //     m: '0 auto',
    //   }}
    //   aria-label="contacts"
    // >
    //   {contacts.map(contact => (
    //     <ListItem disablePadding key={contact.id}>
    //       <ListItemButton
    //         sx={{ display: 'flex', justifyContent: 'flex-start' }}
    //       >
    //         <ListItemText primary={contact.name} />
    //         <ListItemText secondary={contact.number} />
    //       </ListItemButton>
    //     </ListItem>
    //   ))}
    // </List>
  );
};
