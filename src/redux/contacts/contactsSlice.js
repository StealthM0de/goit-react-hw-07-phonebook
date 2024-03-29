import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperation';

const contactsSlice = createSlice({
  // namespace
  name: 'contacts',
  initialState: {
    items: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoading: false,
    error: null,
  },

  //   reducers: {
  //     addContact: {
  //       reducer: (state, action) => {
  //         state.initialContacts.push(action.payload);
  //       },
  //       // preprocesses the payload before dispatching the action
  //       prepare: (name, number) => {
  //         return {
  //           payload: {
  //             id: nanoid(),
  //             name: name.trim(),
  //             number: number.trim(),
  //           },
  //         };
  //       },
  //     },

  //     deleteContact: (state, action) => {
  //       const index = state.initialContacts.findIndex(
  //         contact => contact.id === action.payload
  //       );
  //       state.initialContacts.splice(index, 1);
  //     },
  //   },
  // });

  // const persistConfig = {
  //   key: 'contacts',
  //   storage,
  // };

  // export const contactsReducer = persistReducer(
  //   persistConfig,
  //   contactsSlice.reducer
  // );

  // export const { addContact, deleteContact, deleteAllContacts } =
  //   contactsSlice.actions;

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
