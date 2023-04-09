import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import {
  Box,
  Container,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const theme = createTheme();

  const handleFilterChange = query => dispatch(setFilter(query.toLowerCase()));

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            sx={{ color: 'primary.main' }}
          >
            Contacts
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="filter"
            label="Find contacts by name"
            value={filter}
            onChange={evt => handleFilterChange(evt.target.value)}
            autoFocus
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
