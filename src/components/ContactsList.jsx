import { useDispatch, useSelector } from 'react-redux';
import {
  selectVisibleContacts,
  selectLoading,
  selectError,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';

export default function InteractiveList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts) ?? [];
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Typography>Wait just a second...</Typography>}
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            <DeleteIcon />
          </button>
        </li>
      ))}
    </>
  );
}
