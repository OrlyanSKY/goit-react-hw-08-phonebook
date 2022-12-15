import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from '@mui/material';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Typography>Welcome, {user.name} </Typography>
      <Button
        variant="outlined"
        size="small"
        endIcon={<LogoutIcon />}
        onClick={() => dispatch(logOut())}
        color="inherit"
      >
        logout
      </Button>
    </Box>
  );
};
