import { Field, Form, Input } from './ContactEditor.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';

export const ContactEditor = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const storedContacts = useSelector(selectAllContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const existingContact = storedContacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    existingContact.length
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Field>
        Name
        <Input
          type="text"
          name="name"
          onChange={evt => setName(evt.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Field>
      <Field>
        Phone
        <Input
          type="tel"
          name="number"
          onChange={evt => setNumber(evt.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Field>
      <button type="submit">Add contact</button>
    </Form>
  );
};
