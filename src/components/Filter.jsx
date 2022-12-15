import { addFilterValue } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

import { Box } from '@mui/material';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    return dispatch(addFilterValue(e.target.value));
  };
  return (
    <TextField
      variant="outlined"
      type="text"
      name="filter"
      label="Filter"
      onChange={onChangeFilter}
      sx={{
        width: '300px',
        mt: 1,
        mb: 2,
      }}
    />
  );
};
