import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import ChaletTwoToneIcon from '@mui/icons-material/ChaletTwoTone';
export default function ButtonAppBar() {
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
          <Typography
            color="inherit"
            component={NavLink}
            to="/registration"
            sx={{
              mr: 2,
            }}
          >
            Registration
          </Typography>
          <Typography color="inherit" component={NavLink} to="/logIn">
            Login
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
