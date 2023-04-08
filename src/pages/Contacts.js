import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactEditor />
      <h2>Contacts</h2>
      <div>{isLoading && 'Request in progress...'}</div>
      <div>Contact list</div>
    </>
  );
}
