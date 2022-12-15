import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operations';

const AddNewContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts `);
      return;
    }

    dispatch(
      addContact({
        name,
        number: form.elements.phone.value,
      })
    );
    form.reset();
  };

  return (
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
        <Avatar
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIF.rwE2JgFyo%252fFQ37AWeKmoUw%26pid%3DApi&f=1&ipt=5820ce751a7ea5116a4b115a7237759c708fb6d99bd1ec585e107f0181054536&ipo=images"
          sx={{
            m: 1,
            width: 150,
            height: 150,
            boxShadow: '-4px -1px 29px -4px rgba(0,0,0,0.89)',
          }}
        ></Avatar>
        <Typography component="h1" variant="h5">
          Contacts
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone number"
            type="tel"
            id="phone"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            add contact
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddNewContactForm;
