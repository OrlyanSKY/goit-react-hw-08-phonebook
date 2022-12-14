import { Container } from '@mui/material';

import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './AppBar';

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
export default Layout;
