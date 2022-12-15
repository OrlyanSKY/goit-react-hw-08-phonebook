import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import ChaletTwoToneIcon from '@mui/icons-material/ChaletTwoTone';

import { UserMenu } from './UserMenu';
import { useAuth } from 'hooks/useAuth';

export default function ButtonAppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            color="inherit"
            variant="h6"
            component={NavLink}
            to="/"
            sx={{ flexGrow: 1 }}
          >
            Home
            <ChaletTwoToneIcon color="inherit" />
          </Typography>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <Box>
              <Typography
                color="inherit"
                component={NavLink}
                to="/register"
                sx={{
                  mr: 2,
                }}
              >
                Registration
              </Typography>
              <Typography color="inherit" component={NavLink} to="/logIn">
                Login
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
