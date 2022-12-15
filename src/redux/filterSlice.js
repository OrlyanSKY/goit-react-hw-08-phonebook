import { createSlice } from '@reduxjs/toolkit';

const initialState = '';
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilterValue(state, action) {
      return action.payload;
    },
  },
});

export const { addFilterValue } = filterSlice.actions;
