import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContactsThunk, addContactThunk, deleteContactThunk } from './contacts.services';

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = payload;
            })
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = [...state.contacts, payload];
            })
            .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter(item => item.id !== payload.id);
            })
            .addMatcher(
                isAnyOf(
                    fetchContactsThunk.pending,
                    addContactThunk.pending,
                    deleteContactThunk.pending
                ),
                state => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                isAnyOf(
                    fetchContactsThunk.rejected,
                    addContactThunk.rejected,
                    deleteContactThunk.rejected
                ),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
            )
    },
});

export const contactsReducer = contactsSlice.reducer;
