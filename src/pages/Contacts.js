import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactEditor />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? <div>'Request in progress...'</div> : <ContactList />}
    </>
  );
}
