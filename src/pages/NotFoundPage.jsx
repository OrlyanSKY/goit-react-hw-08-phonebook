import { Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container component="main">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Typography component="h1" variant="h4">
          Oooops, Page not found!
        </Typography>
        <Link to="/">go home</Link>
      </Box>
    </Container>
  );
};
export default NotFoundPage;
