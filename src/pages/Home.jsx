import { Container, CssBaseline, Box, Typography, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
          <Avatar
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIF.rwE2JgFyo%252fFQ37AWeKmoUw%26pid%3DApi&f=1&ipt=5820ce751a7ea5116a4b115a7237759c708fb6d99bd1ec585e107f0181054536&ipo=images"
            sx={{
              m: 1,
              width: 200,
              height: 200,
              boxShadow: '-4px -1px 29px -4px rgba(0,0,0,0.89)',
              mb: 5,
            }}
          />
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
