import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.get(
                `https://655fd02483aba11d99cfe16f.mockapi.io/contacts`
            );
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkApi) => {
        try {
            const { data } = await axios.post(
                'https://655fd02483aba11d99cfe16f.mockapi.io/contacts', contact);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkApi) => {
        try {
            const { data } = await axios.delete(`https://655fd02483aba11d99cfe16f.mockapi.io/contacts/${id}`);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

const contactsInitialState = {
    contacts: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = payload;
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts.push(payload);
            })
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter(item => item.id !== payload.id);
            })
            .addMatcher(
                isAnyOf(
                    fetchContacts.pending,
                    addContact.pending,
                    deleteContact.pending
                ),
                state => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                isAnyOf(
                    fetchContacts.rejected,
                    addContact.rejected,
                    deleteContact.rejected
                ),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
            )
    },
});

export const contactsReducer = contactsSlice.reducer;
