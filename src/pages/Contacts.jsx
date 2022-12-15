import AddNewContactForm from 'components/AddNewContactForm';
import InteractiveList from 'components/ContactsList';
import { Box } from '@mui/material';
import { Filter } from 'components/Filter';
const Contacts = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AddNewContactForm />
      <Filter />
      <InteractiveList />
    </Box>
  );
};
export default Contacts;
