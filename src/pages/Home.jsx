import { Container, CssBaseline, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import avatar from '../../src/contacts-icon.jpg';
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
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            component="img"
            alt="avatar"
            src={avatar}
            sx={{
              m: 1,
              width: 250,
              height: 250,
              ml: -3,
              mb: 5,
            }}
          ></Box>
        </motion.div>
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography component="h1" variant="h5">
            Welcome to the PhoneBook!
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Typography
            sx={{
              maxWidth: 300,
              fontSize: '18px',
              mt: 5,
            }}
          >
            <span>
              {' '}
              Please{' '}
              <Link to="/register" className="navLink">
                register
              </Link>{' '}
              or{' '}
              <Link to="/logIn" className="navLink">
                logIn
              </Link>{' '}
              to get an access to your contacts
            </span>
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home;
