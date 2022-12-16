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
import { useForm } from 'react-hook-form';

const AddNewContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is alredy in contacts `);
      return;
    }
    dispatch(addContact(data));
    reset();
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
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            {...register('name', {
              required: 'Please, enter name',
              minLength: {
                value: 3,
                message: 'min lenght 3 letters',
              },
            })}
            error={!!errors?.name}
            helperText={
              errors?.name && errors.name.message ? errors.name.message : null
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone number"
            type="tel"
            id="phone"
            {...register('number', {
              required: 'Please, enter number',
              minLength: {
                value: 6,
                message: 'min lenght 6 numbers',
              },
              pattern: {
                value: /^\d{1,13}$/,
                message: 'only numbers , no more than 13',
              },
            })}
            error={!!errors?.number}
            helperText={
              errors?.number && errors.number.message
                ? errors.number.message
                : null
            }
          />

          <Button
            disabled={!isValid}
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
