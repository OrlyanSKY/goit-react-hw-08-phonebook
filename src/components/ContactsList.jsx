import { useDispatch, useSelector } from 'react-redux';
import {
  selectVisibleContacts,
  selectLoading,
  selectError,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';

import DeleteIcon from '@mui/icons-material/Delete';
import {
  Typography,
  IconButton,
  Avatar,
  ListItemText,
  List,
  ListItem,
  ListItemAvatar,
} from '@mui/material';

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
      <List>
        {contacts.map(({ name, id, number }) => (
          <ListItem
            sx={{
              width: '300px',
            }}
            key={id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(deleteContact(id))}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar
                sx={{ boxShadow: '-4px -1px 29px -4px rgba(0,0,0,0.89)' }}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.E_q3auuC20MykqbgioJ3ygHaED%26pid%3DApi&f=1&ipt=9c715ab6f082f9f4139222b29d53b9493b3e4ee790467f76dd7f6feff5a7b033&ipo=images"
              />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={number} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
