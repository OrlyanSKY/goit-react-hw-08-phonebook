import { Container, CssBaseline, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Container component="main">
      <CssBaseline />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '90vh',
          textAlign: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Welcome to the PhoneBook!
        </Typography>
        <Typography
          sx={{
            maxWidth: 300,

            mt: 5,
          }}
        >
          Please , <Link to="/register">register</Link> or{' '}
          <Link to="/logIn">logIn</Link> to get an access to your contacts
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
