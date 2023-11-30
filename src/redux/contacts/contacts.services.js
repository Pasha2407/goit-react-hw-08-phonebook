import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/auth.services';

export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get(
                `/contacts`
            );
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/add',
    async (formData, thunkApi) => {
        try {
            const { data } = await instance.post(
                '/contacts', formData);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/delete',
    async (id, thunkApi) => {
        try {
            const { data } = await instance.delete(`/contacts/${id}`);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);