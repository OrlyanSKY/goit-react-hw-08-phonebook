import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../contacts/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const ifPending = state => {
  state.isLoading = true;
};
const ifRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    // FETCH
    builder
      .addCase(fetchContacts.pending, ifPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, ifRejected)

      //ADD CONTACT

      .addCase(addContact.pending, ifPending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addContact.rejected, ifRejected)

      // DELETE CONTACT

      .addCase(deleteContact.pending, ifPending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.error = null;
      })
      .addCase(deleteContact.rejected, ifRejected);
  },
});
